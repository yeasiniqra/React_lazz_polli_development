import React from 'react';
import PageHeader from '../../PageHeader/PageHeader';
import commonBg from '../../../images/room.jpg'
import { getFullpackage } from '../../../services/data-service';
import FullPackageTemplate from '../FullPackageTemplate/FullPackageTemplate';

const FullPackage = () => {
    const packages = getFullpackage()
    return (
        <>
          <PageHeader imageURL={commonBg} title={'Full Package'} />
          <div className="full-package-area">
            <div className="container">
                <div className="package-grid">
                    {
                        packages.map((item) => <FullPackageTemplate item={item} key={item.id}  /> )
                    }
                </div>
            </div>
          </div>
        </>
    );
};

export default FullPackage;