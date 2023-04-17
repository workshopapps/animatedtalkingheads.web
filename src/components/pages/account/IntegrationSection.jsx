import youtube from '../../../assets/icons/account/integrations/youtube.png';
import oneDrive from '../../../assets/icons/account/integrations/one-drive.png';
import twitter from '../../../assets/icons/account/integrations/twitter.png';
import dropbox from '../../../assets/icons/account/integrations/dropbox.png';
import facebook from '../../../assets/icons/account/integrations/facebook.png';
import instagram from '../../../assets/icons/account/integrations/instagram.png';
import googleDrive from '../../../assets/icons/account/integrations/google-drive.png';
import linkedIn from '../../../assets/icons/account/integrations/linkedin.png';


const IntegrationSection = () => {

    return (
        <div className=''>

            <div className='flex justify-between'>
                <Integration image={youtube} name={"Youtube"} line />
                <Integration image={oneDrive} name={"One Drive"} line />
            </div>

            <div className='flex justify-between'>
                <Integration image={twitter} name={"Twitter"} line />
                <Integration image={facebook} name={"Facebook"} line />
            </div>

            <div className='flex justify-between'>
                <Integration image={dropbox} name={"Dropbox"} line />
                <Integration image={instagram} name={"Instagram"} line />
            </div>

            <div className='flex justify-between'>
                <Integration image={googleDrive} name={"Google Drive"} />
                <Integration image={linkedIn} name={"LinkedIn"} />
            </div>

        </div>
    )
}

export default IntegrationSection

export const Integration = ({image, name, line}) => {

    return (
        <div className='w-full max-w-[240px] p-2'>
            <div className="flex justify-between items-center">

                <div className='flex items-center '>
                    <img alt={name} src={image} width="32" height="32" />
                    <p className='ml-5'>{name}</p>
                </div>

                <div className='flex items-center '>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>

            </div>

            {
                line &&<div className='my-6 text-[#292D32] border-b-[1px] border-gray'></div>
            }

        </div>
    )
}