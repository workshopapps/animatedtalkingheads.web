// import React, { useEffect } from 'react';
// import useDrivePicker from 'react-google-drive-picker';

// function GooglePicker() {
//   const [openPicker, data] = useDrivePicker();
//   // const customViewsArray = [new google.picker.DocsView()]; // custom view
//   const handleOpenPicker = () => {
//     openPicker({
//       clientId: '492190163132-kgj16ecb2da4s32livg95b40n36bfl64.apps.googleusercontent.com',
//       developerKey: 'AIzaSyAf6aHjqTYW2-9K57xgIpf-WwJRvRjLsAs',
//       viewId: 'DOCS',
//       // token: token,  // pass oauth token in case you already have one
//       showUploadView: true,
//       showUploadFolders: true,
//       supportDrives: true,
//       multiselect: true,
//       // customViews: customViewsArray, // custom view
//       callbackFunction: (data) => {
//         if (data.action === 'cancel') {
//           console.log('User clicked cancel/close button');
//         }
//         console.log(data);
//       }
//     });
//   };
//   useEffect(() => {
//     if (data) {
//       data.docs.map((i) => console.log(i));
//     }
//   }, [data]);

//   return (
//     <div>
//       <button onClick={() => handleOpenPicker()}>Open Picker</button>
//     </div>
//   );
// }

// export default GooglePicker;
