import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import styles from './styles.module.css';
import { ReactComponent as Brush } from "../../../assets/brush.svg"
import { ReactComponent as Cube } from "../../../assets/3dcube.svg";
import { ReactComponent as People } from "../../../assets/people.svg";
import { ReactComponent as Tag2 } from "../../../assets/tag-2.svg";
import people from "../../../assets/Rectangle 240.png"
import Layout from '../Layout';
import PageTitle from '../../../components/UI/page-title';

const SettingsNav = () => {
  return (
    <>

      <div className={styles.navSet}>
        <div className={`h-full flex justify-between items-center px-3 lg:px-20`}>
          <div className="flex gap-2" >
            <Brush className="w-6 h-6" />
            <Link className={styles.links} to="/settings-appearance">
              <p >  Appearance</p>
            </Link>
          </div>

          <div className="flex gap-2">
            <Cube className="w-6 h-6" />
            <Link className={styles.links} to="/settings-integration">
              <p> Integration & Apps</p>
            </Link>
          </div>

          <div className="flex gap-2">
            <People className="w-6 h-6" />
            <Link className={styles.links} to="/settings-community">
              <p>Community</p>
            </Link>
          </div>

          <div className="flex gap-2">
            <Tag2 className="w-6 h-6" />
            <Link className={styles.links} to="/settings-voxclips">
              <p>Voxclip Branding</p>
            </Link>
          </div>

          <div className="flex gap-2">
            <img src={people} alt="people" className="w-6 h-6" />
            <Link className={styles.links} to="/settings-accessibility">
              <p>Accessibility</p>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}



export default SettingsNav;
