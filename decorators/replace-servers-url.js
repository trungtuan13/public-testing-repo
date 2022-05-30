module.exports = ReplaceServersURL;

/** @type {import('@redocly/cli').OasDecorator} */

function ReplaceServersURL() {
  return {
    Server: {
      leave(Server) {
//        if ( 'SERVERS_URL' in ['titus.']) {
          Server.url = 'https://titus-testing.com';
//          console.log(Server)
//        }
      }
    },
    Info: {
        leave(Info) {
//            console.log('Info: ' , Info);
        }
    },
    PathItem: {
        leave(PathItem) {
        PathItem.post.security = null;
        console.log('PathItem: ', PathItem)
        /*
              security:
                - Oauth2:
                    - read
        */
        }
    }
  }
};