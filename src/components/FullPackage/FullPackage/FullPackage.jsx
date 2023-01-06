import React from 'react';
import PageHeader from '../../PageHeader/PageHeader';
import commonBg from '../../../images/room.webp'
import { getFullpackage } from '../../../services/data-service';
import FullPackageTemplate from '../FullPackageTemplate/FullPackageTemplate';
import { useState } from 'react';
import FullPackageMdl from '../../Sheared/CommonModal/FullPackageMdl';

const FullPackage = () => {
    const packages = getFullpackage();
    const [fullpackage, setPackage] = useState(null)

    return (
        <>
          <PageHeader imageURL={commonBg} title={'Full Package'} />
            <div className="container">
                <div className="package-grid">
                    {
                        packages.map((item) => <FullPackageTemplate
                         item={item} 
                         key={item.Id} 
                         setPackage={setPackage}
                         /> )
                    }
                    {
                        fullpackage &&
                        <FullPackageMdl 
                          fullpackage={fullpackage}
                          setPackage={setPackage}
                        />
                    }
                    
                </div>
            </div>
        </>
    );
};

export default FullPackage;