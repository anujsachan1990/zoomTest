export const initZoom = async ({
  meetingNumber = 79631636690,
  userName = "default",
}) => {
  // lazy load script
  const { ZoomMtg } = await import("@zoomus/websdk");
  console.log(ZoomMtg);
  if (typeof ZoomMtg !== "undefined") {
    console.log("checkSystemRequirements");
    console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.7.7/lib", "/av"); // CDN version default
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    var API_KEY = "p_0XQpvIS6iBbOAVnre51g";

    /**
     * NEVER PUT YOUR ACTUAL API SECRET IN CLIENT SIDE CODE, THIS IS JUST FOR QUICK PROTOTYPING
     * The below generateSignature should be done server side as not to expose your api secret in public
     * You can find an eaxmple in here: https://marketplace.zoom.us/docs/sdk/native-sdks/web/essential/signature
     */

    var API_SECRET = "dKoWi6l1vwR1eg0hpGyeDwDjLEg6EWwFGPHg";

    const meetConfig = {
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      meetingNumber,
      userName,
      passWord: "anuj",
      leaveUrl: "https://anuj-zoom.netlify.app/zoom/",
      role: 0,
    };

    ZoomMtg.generateSignature({
      meetingNumber: meetConfig.meetingNumber,
      apiKey: meetConfig.apiKey,
      apiSecret: meetConfig.apiSecret,
      role: meetConfig.role,
      success(res) {
        console.log("signature", res.result);
        ZoomMtg.init({
          leaveUrl: "https://anuj-zoom.netlify.app/zoom/",
          success() {
            ZoomMtg.join({
              meetingNumber: meetConfig.meetingNumber,
              userName: meetConfig.userName,
              signature: res.result,
              apiKey: meetConfig.apiKey,
              passWord: meetConfig.passWord,
              success() {
                //  $("#nav-tool").hide();
                console.log("join meeting success");
              },
              error(res) {
                console.log(res);
              },
            });
          },
          error(res) {
            console.log(res);
          },
        });
      },
    });
  }
};
