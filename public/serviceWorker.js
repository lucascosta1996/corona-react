export function register( config ) {
  if ( process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator ) {
    window.addEventListener( 'load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if( isLocalhost ) {
        checkValidServiceWorker( swUrl, config )

        navigator.serviceWorker.ready.then( registration => {
          console.log( "This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA" )
        } )
      } else {
        registerValidSW( swUrl, config )
      }
    } )
  }
}

function registerValidSW( swUrl, config ) {
  navigator.serviceWorker
  .register( swUrl )
  .then( registration => {
    registration.onupdatefound = () => {
      const installingworker = registration.installing;
      if ( installingworker === null ) {
        return;
      }
      installingworker.onstatechange = () => {
        if ( installingworker.state === 'installed' ) {
          console.log( 'New content available and will be used when all tabsfor this page are closed' );
        }
        if ( config && config.onUpdate ) {
          config.onUpdate( registration );
        } else {
          console.log( 'Content is cached for offline use.' )
          if ( config && config.onSuccess ) {
            config.onSuccess( registration );
          }
        }
      }
    }
  } )
  .catch( error => {
    console.log( 'Error during service worker registration: ', error );
  } )
}