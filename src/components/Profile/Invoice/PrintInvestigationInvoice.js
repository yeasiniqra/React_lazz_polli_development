// eslint-disable-next-line no-unused-vars
var Controller = new function () {

    var service = {}, windowModel, formModel = {}, callerOptions, currentDate = new Date(),
        filter = { "field": "Id", "value": "", Operation: 0 };
    function close() {
        windowModel && windowModel.Hide();
    };
    function reset() {
        windowModel.View.find('.tab-content .tab-pane').removeClass('in active');
        windowModel.View.find('ul.nav.nav-tabs li').removeClass('active');
    }
    function setTabEvent() {
        windowModel.View.find('ul.nav.nav-tabs li').click(function () {
            service[this.dataset.field].Bind();
        });
    };
    this.Show = function (model) {
        callerOptions = model;
        filter.value = callerOptions.PatientInvestigationId;
        console.log(['model', model]);
        if (windowModel) {
            windowModel.Show();
            //console.log(['service.Prescription', service.Prescription, service.Prescription.Bind]);
            //service.Prescription.Bind();
            service.PatientInvestigation.Bind();
        } else {
            Global.LoadTemplate('/Content/IqraHMS/BillingArea/Templates/PrintInvestigationInvoice.html', function (response) {
                windowModel = Global.Window.Bind(response, { width: '95%' });
                Global.Form.Bind(formModel, windowModel.View);
                windowModel.View.find('.btn_cancel').click(close);
                windowModel.Show();
                service.PatientInvestigation.Bind();
                setTabEvent();
            }, noop);
        }
    };
    (function () {
        var isBind, dataSource = {}, Id, selfServicre = {};
        function bind() {
            if (!isBind) {
                isBind = true;
                Global.Form.Bind(formModel, windowModel.View.find('#printInvestigationInvoice'));
            }
            reset();
            windowModel.View.find('#printInvestigationInvoice').addClass('in active');
            $(windowModel.View.find('ul.nav.nav-tabs li')[0]).addClass('active');
        };
        function createItem(container, item) {
            if (+item.Discount) {
                windowModel.View.find('.js--discount').show();
            } else {
                windowModel.View.find('.js--discount').hide();
            }

            container.append(`<tr class="item-row">
                            <td class ="item-name"><div> `+ ++item.Position + ` </div></td>
                            <td class ="item-name"><div> `+ item.Code +` </div></td>
                            <td class ="item-name"><div> `+ item.InvestigationName +` </div></td>
                            <td class ="item-name"><div> `+ item.Quantity +` </div></td>
                            <td class ="item-name" align="right"><div> `+ item.Cost +` </div></td>
                            ${item.Discount ? `<td class ="item-name" align="right"><div> ` + item.Discount +` </div></td>`: ''}
                            
                            <td colspan="4" class ="price" align="right"> &#2547; `+ item.NetAmount +`/-</td>
                        </tr>`);
        };
        function populate(model) {
            var patientModel = model[0][0] ,
                patientInvestigationModel = model [1][0],
                itemContainer = windowModel.View.find('#items tbody').empty();
            if (patientInvestigationModel.DueAmount > 0) {
                formModel.PaymentStatus = 'Due'
            } else {
                formModel.PaymentStatus = 'Paid'
            }
            for (var key in formModel) {
                if (typeof patientModel[key] != 'undefined') {
                    formModel[key] = "&nbsp;" + (patientModel[key] || '');
                }
            }
            for (var inv in formModel) {
                if (typeof patientInvestigationModel[inv] != 'undefined') {
                    formModel[inv] = "&nbsp;" + (patientInvestigationModel[inv] || 'N/A');
                }
            }

            if (+patientInvestigationModel.DiscountTaka) {
                windowModel.View.find('.js--discount').show();
            } else {
                windowModel.View.find('.js--discount').hide();
            }

            formModel.Discount = ' (' + (patientInvestigationModel.DiscountTaka / patientInvestigationModel.TotalAmount * 100).toFixed() + '%)';

            formModel.DiscountTaka = patientInvestigationModel.DiscountTaka;
            formModel.CreatedAt = "&nbsp;" + patientInvestigationModel.CreatedAt.getDate().format('dd/MM/yyyy hh:mm');
            //console.log(['data', formModel, patientModel, patientInvestigationModel]);
            model[2].orderBy('Position').each(function () {
                createItem(itemContainer,this);
            });
            currentDate = model[3][0].CurrentDate.getDate();
            patientModel.DateOfBirth = patientModel.DateOfBirth.getDate();
            patientModel.PatientAge = new Date(currentDate.getTime() - patientModel.DateOfBirth.getTime());
            patientModel.PatientAge.setFullYear(patientModel.PatientAge.getFullYear() - 1970);
            formModel.PatientAge = patientModel.PatientAge.getFullYear() + ' yrs ' + (patientModel.PatientAge.getMonth()) + ' mnths ' + patientModel.PatientAge.getDate() + ' days ';
            formModel.DeliveryDate = patientInvestigationModel.DeliveryDate.getDate().format('yyyy/MM/dd hh:mm');
            var opt = {
                elm: $('#ptnt_barcode'),
                text: patientInvestigationModel.Code,
                height: 30
            };
            Global.Barcode.Bind(opt);
            console.log(opt);
        };
        function load() {
            //console.log(['load()', callerOptions, callerOptions.PatientInvestigationId]);
            Global.CallServer('/InvestigationArea/PatientInvestigation/CheckDetails?Id=' + callerOptions.PatientInvestigationId, function (response) {
                console.log(response);
                if (!response.IsError) {
                    populate(response.Data);
                } else {
                    Global.Error.Show(response, {});
                }
            }, function (response) {
                response.Id = -8;
                Global.Error.Show(response, {});
            }, null, 'Get');
        };
        this.Bind = function () {
            bind();
            load();
            Id = callerOptions.PatientInvestigationId;
            service.PrintService.Bind();
        };
    }).call(service.PatientInvestigation = {});
    (function () {
        function printElem(elm) {
            var mywindow = window.open('', 'PRINT', 'height=800,width=1200');
            mywindow.document.write('<html><head><title>' + 'Inv Invoice' + '</title>');
            mywindow.document.write('<link href="/Content/bootstrap.min.css" rel="stylesheet" /><script src="/Content/IqraService/Js/global.js"></script><style type="text/css" media="print">@page{size:  auto;margin: 0mm;}html{background-color: #FFFFFF;margin: 0px;}</style></head>');
            mywindow.document.write('<body style="padding: 20px;">');
            console.log(['page-wrap',elm,elm.html()]);
            mywindow.document.write(elm.html()+'')
            mywindow.document.write('<script type="text/javascript"> $(document).ready(function () { window.print();});</script>');
            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus();
            return true;
        }
        this.Print = function (elm) {
            printElem(elm);
        }
        this.Bind = function () {
            Global.Click(windowModel.View.find('.btn_print'), printElem, windowModel.View.find('#page-wrap'));
        };
    }).call(service.PrintService = {});

}();