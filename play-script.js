 window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    if (loaderWrapper) {
        loaderWrapper.style.opacity = '0';
        loaderWrapper.style.transition = 'opacity 0.5s ease';
        
        // Trigger video playback when loader fades out
        startVideoPlayback();
        
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 100);
    }
});

var animationData = {"v":"5.12.1","fr":30,"ip":0,"op":59,"w":1920,"h":1080,"nm":"Loader","ddd":0,"assets":[],"fonts":{"list":[{"fName":"DINAlternate-Regular","fFamily":"DIN Alternate","fStyle":"Regular","ascent":71.1990356445312}]},"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 13","tt":2,"tp":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.306,"y":1},"o":{"x":0.684,"y":0},"t":-15,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":15,"s":[1130,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":45,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"t":75,"s":[1129,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-140.503,40.704,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.752,0.752,0.667],"y":[1,1,1]},"o":{"x":[0.826,0.826,0.333],"y":[0,0,0]},"t":-15,"s":[100,100,100]},{"i":{"x":[0.169,0.169,0.667],"y":[1,1,1]},"o":{"x":[0.22,0.22,0.333],"y":[0,0,0]},"t":0,"s":[78,78,100]},{"i":{"x":[0.835,0.835,0.575],"y":[1,1,1]},"o":{"x":[0.894,0.894,0.185],"y":[0,0,0]},"t":15,"s":[100,100,100]},{"i":{"x":[0.078,0.078,0.703],"y":[1,1,1]},"o":{"x":[0.204,0.204,0.341],"y":[0,0,0]},"t":30,"s":[115,115,100]},{"i":{"x":[0.752,0.752,0.667],"y":[1,1,1]},"o":{"x":[0.826,0.826,0.333],"y":[0,0,0]},"t":45,"s":[100,100,100]},{"i":{"x":[0.169,0.169,0.667],"y":[1,1,1]},"o":{"x":[0.22,0.22,0.333],"y":[0,0,0]},"t":60,"s":[78,78,100]},{"t":75,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[72.362,72.362],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.121568627451,0.666666666667,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-140.502,40.704],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":46,"op":59,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.306,"y":1},"o":{"x":0.684,"y":0},"t":-15,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":15,"s":[1130,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":45,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"t":75,"s":[1129,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-140.503,40.704,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.752,0.752,0.667],"y":[1,1,1]},"o":{"x":[0.826,0.826,0.333],"y":[0,0,0]},"t":-15,"s":[100,100,100]},{"i":{"x":[0.169,0.169,0.667],"y":[1,1,1]},"o":{"x":[0.22,0.22,0.333],"y":[0,0,0]},"t":0,"s":[78,78,100]},{"i":{"x":[0.835,0.835,0.575],"y":[1,1,1]},"o":{"x":[0.894,0.894,0.185],"y":[0,0,0]},"t":15,"s":[100,100,100]},{"i":{"x":[0.078,0.078,0.703],"y":[1,1,1]},"o":{"x":[0.204,0.204,0.341],"y":[0,0,0]},"t":30,"s":[115,115,100]},{"i":{"x":[0.752,0.752,0.667],"y":[1,1,1]},"o":{"x":[0.826,0.826,0.333],"y":[0,0,0]},"t":45,"s":[100,100,100]},{"i":{"x":[0.169,0.169,0.667],"y":[1,1,1]},"o":{"x":[0.22,0.22,0.333],"y":[0,0,0]},"t":60,"s":[78,78,100]},{"t":75,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[72.362,72.362],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.121568627451,0.666666666667,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-140.502,40.704],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":15,"op":46,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 2","tt":2,"tp":9,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.306,"y":1},"o":{"x":0.684,"y":0},"t":-15,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":15,"s":[1130,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":45,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"t":75,"s":[1129,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-140.503,40.704,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.752,0.752,0.667],"y":[1,1,1]},"o":{"x":[0.826,0.826,0.333],"y":[0,0,0]},"t":-15,"s":[100,100,100]},{"i":{"x":[0.169,0.169,0.667],"y":[1,1,1]},"o":{"x":[0.22,0.22,0.333],"y":[0,0,0]},"t":0,"s":[78,78,100]},{"i":{"x":[0.835,0.835,0.575],"y":[1,1,1]},"o":{"x":[0.894,0.894,0.185],"y":[0,0,0]},"t":15,"s":[100,100,100]},{"i":{"x":[0.078,0.078,0.703],"y":[1,1,1]},"o":{"x":[0.204,0.204,0.341],"y":[0,0,0]},"t":30,"s":[115,115,100]},{"i":{"x":[0.752,0.752,0.667],"y":[1,1,1]},"o":{"x":[0.826,0.826,0.333],"y":[0,0,0]},"t":45,"s":[100,100,100]},{"i":{"x":[0.169,0.169,0.667],"y":[1,1,1]},"o":{"x":[0.22,0.22,0.333],"y":[0,0,0]},"t":60,"s":[78,78,100]},{"t":75,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[72.362,72.362],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.121568627451,0.666666666667,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-140.502,40.704],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1,"op":15,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":5,"nm":"LOADING 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[955.756,553.186,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[42,42,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":90,"f":"DINAlternate-Regular","t":"LOADING","ca":1,"j":2,"tr":115,"lh":219.50846862793,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":15,"op":46,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.287,"y":1},"o":{"x":0.697,"y":0},"t":-15,"s":[1130,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.306,"y":1},"o":{"x":0.684,"y":0},"t":15,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":45,"s":[1130,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.293,"y":1},"o":{"x":0.697,"y":0},"t":75,"s":[790,540,0],"to":[0,0,0],"ti":[0,0,0]},{"t":105,"s":[1129,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-140.503,40.704,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.502,0.502,0.667],"y":[1,1,1]},"o":{"x":[0.204,0.204,0.341],"y":[0,0,0]},"t":0,"s":[115,115,100]},{"i":{"x":[0.752,0.752,0.667],"y":[1,1,1]},"o":{"x":[0.826,0.826,0.333],"y":[0,0,0]},"t":15,"s":[100,100,100]},{"i":{"x":[0.169,0.169,0.667],"y":[1,1,1]},"o":{"x":[0.22,0.22,0.333],"y":[0,0,0]},"t":30,"s":[78,78,100]},{"i":{"x":[0.835,0.835,0.575],"y":[1,1,1]},"o":{"x":[0.526,0.526,0.333],"y":[0,0,0]},"t":45,"s":[100,100,100]},{"t":60,"s":[115,115,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[72.362,72.362],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.121568627451,0.666666666667,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-140.502,40.704],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":59,"st":30,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":5,"nm":"LOADING 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[955.756,553.186,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[42,42,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":90,"f":"DINAlternate-Regular","t":"LOADING","ca":1,"j":2,"tr":115,"lh":219.50846862793,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":46,"op":59,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":5,"nm":"LOADING 3","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[955.756,553.186,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[42,42,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":90,"f":"DINAlternate-Regular","t":"LOADING","ca":1,"j":2,"tr":115,"lh":219.50846862793,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":46,"op":59,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":5,"nm":"LOADING 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[955.756,553.186,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[42,42,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":90,"f":"DINAlternate-Regular","t":"LOADING","ca":1,"j":2,"tr":115,"lh":219.50846862793,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":15,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":9,"ty":5,"nm":"LOADING","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[955.756,553.186,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[42,42,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":90,"f":"DINAlternate-Regular","t":"LOADING","ca":1,"j":2,"tr":115,"lh":219.50846862793,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":15,"st":0,"ct":1,"bm":0}],"markers":[],"props":{},"chars":[{"ch":"L","size":90,"style":"Regular","w":57.32,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[54.297,-6.787],[17.92,-6.787],[17.92,-71.191],[10.303,-71.191],[10.303,0],[54.297,0]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"L","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"DIN Alternate"},{"ch":"O","size":90,"style":"Regular","w":64.99,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.212,3.011],[0.977,2.523],[2.118,2.051],[7.201,0],[4.919,-4.915],[0.945,-2.473],[0.212,-3.011],[0,-6.087],[-0.082,-2.393],[-0.424,-2.278],[-0.864,-1.709],[-1.727,-1.758],[-7.234,0],[-4.92,4.916],[-0.978,2.523],[-0.212,3.011],[0,6.087]],"o":[[-0.212,-3.011],[-0.978,-2.522],[-4.92,-4.915],[-7.234,0],[-2.151,2.148],[-0.945,2.474],[-0.212,3.011],[0,4.688],[0.081,2.393],[0.423,2.279],[0.864,1.709],[4.919,4.916],[7.201,0],[2.118,-2.051],[0.977,-2.522],[0.212,-3.011],[0,-6.087]],"v":[[57.104,-49.243],[55.32,-57.544],[50.677,-64.404],[32.495,-71.777],[14.265,-64.404],[9.621,-57.471],[7.886,-49.243],[7.568,-35.596],[7.69,-24.976],[8.448,-17.969],[10.378,-11.987],[14.265,-6.787],[32.495,0.586],[50.677,-6.787],[55.32,-13.647],[57.104,-21.948],[57.422,-35.596]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.098,-2.197],[0.325,-1.741],[0.667,-1.302],[1.139,-1.204],[2.148,-0.895],[2.311,0],[2.132,0.896],[1.595,1.595],[0.586,3.109],[0,7.715],[-0.586,3.109],[-2.181,2.246],[-2.132,0.863],[-2.344,0],[-2.148,-0.879],[-1.595,-1.627],[-0.668,-1.302],[-0.326,-1.741],[-0.098,-2.213],[0,-4.557]],"o":[[-0.098,2.197],[-0.326,1.742],[-0.668,1.302],[-1.595,1.595],[-2.148,0.896],[-2.344,0],[-2.132,-0.895],[-2.181,-2.278],[-0.586,-3.108],[0,-7.747],[0.586,-3.108],[1.595,-1.66],[2.132,-0.862],[2.311,0],[2.148,0.879],[1.139,1.14],[0.667,1.302],[0.325,1.742],[0.098,2.214],[0,4.525]],"v":[[49.658,-25.513],[49.023,-19.604],[47.534,-15.039],[44.824,-11.279],[39.209,-7.544],[32.52,-6.201],[25.806,-7.544],[20.215,-11.279],[16.064,-19.36],[15.186,-35.596],[16.064,-51.88],[20.215,-59.912],[25.806,-63.696],[32.52,-64.99],[39.209,-63.672],[44.824,-59.912],[47.534,-56.25],[49.023,-51.685],[49.658,-45.752],[49.805,-35.596]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"O","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"DIN Alternate"},{"ch":"A","size":90,"style":"Regular","w":61.08,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.789,-71.191],[27.393,-71.191],[1.221,0],[9.277,0],[14.99,-16.113],[46.094,-16.113],[51.807,0],[59.912,0]],"c":true},"ix":2},"nm":"A","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[17.285,-22.705],[30.713,-60.303],[43.896,-22.705]],"c":true},"ix":2},"nm":"A","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"A","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"DIN Alternate"},{"ch":"D","size":90,"style":"Regular","w":67.29,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.276,2.849],[1.025,2.686],[2.083,2.051],[7.584,0],[0,0],[0,0],[0,0],[-3.093,1.123],[-2.148,2.148],[-1.025,2.914],[-0.277,3.076],[0,3.874],[0,0]],"o":[[0,-3.743],[-0.277,-2.848],[-1.025,-2.686],[-4.395,-4.395],[0,0],[0,0],[0,0],[3.645,0],[3.092,-1.123],[2.083,-2.018],[1.025,-2.913],[0.276,-3.076],[0,0],[0,0]],"v":[[59.717,-39.307],[59.302,-49.194],[57.349,-57.495],[52.686,-64.6],[34.717,-71.191],[10.303,-71.191],[10.303,0],[34.717,0],[44.824,-1.685],[52.686,-6.592],[57.349,-13.989],[59.302,-22.974],[59.717,-33.398],[59.717,-36.377]],"c":true},"ix":2},"nm":"D","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.52,-3.938],[2.083,-2.246],[5.957,0],[0,0],[0,0],[0,0],[-3.386,-3.483],[-0.668,-2.327],[-0.163,-2.539],[0,-3.873]],"o":[[-0.521,3.939],[-3.386,3.484],[0,0],[0,0],[0,0],[5.957,0],[1.465,1.595],[0.667,2.328],[0.163,2.539],[0,6.12]],"v":[[51.318,-21.289],[47.412,-12.012],[33.398,-6.787],[17.92,-6.787],[17.92,-64.404],[33.398,-64.404],[47.412,-59.18],[50.61,-53.296],[51.855,-45.996],[52.1,-36.377]],"c":true},"ix":2},"nm":"D","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"D","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"DIN Alternate"},{"ch":"I","size":90,"style":"Regular","w":28.22,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[17.92,-71.191],[10.303,-71.191],[10.303,0],[17.92,0]],"c":true},"ix":2},"nm":"I","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"I","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"DIN Alternate"},{"ch":"N","size":90,"style":"Regular","w":73.19,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[62.891,-71.191],[55.273,-71.191],[55.273,-14.307],[17.48,-71.191],[10.303,-71.191],[10.303,0],[17.92,0],[17.92,-57.08],[55.666,0],[62.891,0]],"c":true},"ix":2},"nm":"N","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"N","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"DIN Alternate"},{"ch":"G","size":90,"style":"Regular","w":64.5,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[2.604,-3.092],[2.327,-1.057],[2.637,0],[3.223,3.32],[0.586,3.125],[0,7.748],[-0.586,3.109],[-2.181,2.246],[-2.132,0.863],[-2.344,0],[-1.823,-0.602],[-1.449,-1.074],[-1.986,-1.985],[0,0],[2.069,1.4],[2.444,0.7],[2.933,0],[4.92,-4.915],[0.945,-2.473],[0.212,-3.011],[0,-6.087],[-0.082,-2.393],[-0.424,-2.278],[-0.864,-1.709],[-1.727,-1.758],[-7.234,0],[-3.226,1.433],[-2.411,2.605],[-0.961,2.93],[0,4.07]],"o":[[0,0],[0,0],[0,0],[0,0],[0,5.566],[-1.628,1.953],[-2.328,1.058],[-4.98,0],[-2.181,-2.278],[-0.586,-3.125],[0,-7.747],[0.586,-3.108],[1.595,-1.66],[2.132,-0.862],[2.246,0],[1.823,0.603],[1.448,1.074],[0,0],[-2.249,-2.246],[-2.069,-1.399],[-2.444,-0.7],[-7.235,0],[-2.151,2.148],[-0.945,2.474],[-0.212,3.011],[0,4.688],[0.081,2.393],[0.423,2.279],[0.864,1.709],[4.919,4.916],[3.682,0],[3.226,-1.432],[2.15,-2.311],[0.961,-2.93],[0,0]],"v":[[57.422,-37.305],[32.52,-37.305],[32.52,-30.615],[49.805,-30.615],[49.805,-25.293],[45.898,-12.305],[39.966,-7.788],[32.52,-6.201],[20.215,-11.182],[16.064,-19.287],[15.186,-35.596],[16.064,-51.88],[20.215,-59.912],[25.806,-63.696],[32.52,-64.99],[38.623,-64.087],[43.53,-61.572],[48.682,-56.982],[53.809,-62.109],[47.332,-67.578],[40.562,-70.728],[32.497,-71.777],[14.265,-64.404],[9.621,-57.471],[7.886,-49.243],[7.568,-35.596],[7.69,-24.976],[8.448,-17.969],[10.378,-11.987],[14.265,-6.787],[32.495,0.586],[42.857,-1.562],[51.312,-7.617],[55.98,-15.479],[57.422,-25.977]],"c":true},"ix":2},"nm":"G","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"G","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"DIN Alternate"}]};
    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    };

    var anim;

    anim = lottie.loadAnimation(params);

 const videoElement = document.getElementById('preview-video');

// Ensure video starts paused
if (videoElement) {
    videoElement.pause();
}

function startVideoPlayback() {
    
    // Trigger fadeInRiseUp animation on all elements with the animation
    document.body.style.overflow = 'auto'
    const introLines = document.querySelectorAll('.intro-line');
    const thumbnailTexts = document.querySelectorAll('.thumbnail-text');
    const bigThumbnails = document.querySelectorAll('.big-thumbnail');
    const smallThumbnails = document.querySelectorAll('.small-thumbnail');
    
    // Add animate class to trigger animations
    introLines.forEach(el => el.classList.add('animate'));
    thumbnailTexts.forEach(el => el.classList.add('animate'));
    bigThumbnails.forEach(el => el.classList.add('animate'));
    smallThumbnails.forEach(el => el.classList.add('animate'));
    
    if (videoElement) {
        setTimeout(() => {
        videoElement.play().catch(error => {
            console.error('Error playing video:', error);
        });
        }, 100);
    }
}

       const mainContent = document.querySelector('.main-content');
        const navbar = document.querySelector('.navbar');
        const navToggleBtn = document.querySelector('.nav-toggle-btn');
        const innerNavToggleBtn = document.querySelector('.inner-nav-toggle-btn');
        const root = document.documentElement;

        function calculateNavScale() {
            const navbarWidth = 200; // Fixed navbar width in pixels
            const scale = (window.innerWidth - navbarWidth) / window.innerWidth;
            root.style.setProperty('--nav-scale', scale);
        }
        
        function toggleNavBar() {
            mainContent.classList.toggle('nav-open');
            navbar.classList.toggle('nav-open');
            
        }

        navToggleBtn.addEventListener('click', toggleNavBar);
        innerNavToggleBtn.addEventListener('click', toggleNavBar);
        
        // Initialize on page load
        calculateNavScale();
        window.addEventListener('resize', calculateNavScale);
        const LineLandingElement = document.getElementById('line-landing');
        const workLandingElement = document.getElementById('work-landing');
        const hardLandingElement = document.getElementById('hard-landing');
        const playLandingElement = document.getElementById('play-landing');
        const harderLandingElement = document.getElementById('harder-landing');

        const interactiveElements = [
            workLandingElement,
            hardLandingElement,
            playLandingElement,
            harderLandingElement
        ];

        // Define custom bounding boxes, sizes, and origins for each element
        // width/height: repulsion zone dimensions (in pixels or as functions for fluid scaling)
        // originX/originY: where the element snaps back to (in pixels or as functions)
        const elementConfigs = {
            'work-landing': { 
                width: window.innerWidth * (310/1920), 
                height: window.innerWidth * (95/1920), 
                originX: () => window.innerWidth * (215/1920),
                originY: () => window.innerWidth * (160/1920)
            },
            'hard-landing': { 
                width: window.innerWidth * (300/1920), 
                height: window.innerWidth * (95/1920), 
                originX: () => window.innerWidth * (550/1920),
                originY: () => window.innerWidth * (160/1920)
            },
            'play-landing': { 
                width: window.innerWidth * (520/1920), 
                height: window.innerWidth * (150/1920), 
                originX: () => window.innerWidth * (430/1920),
                originY: () => window.innerWidth * (310/1920)
            },
            'harder-landing': { 
                width: window.innerWidth * (700/1920), 
                height: window.innerWidth * (150/1920), 
                originX: () => window.innerWidth * (1080/1920),
                originY: () => window.innerWidth * (315/1920)
            }
        };

        // Store state for each element
        const elementStates = {};
        interactiveElements.forEach(element => {
            elementStates[element.id] = {
                isRepelled: false
            };
            element.style.transition = 'transform 0.3s ease-out';
        });

        // Calculate distance between two points
        function getDistance(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }

        // Get a value that could be a number or a function
        function getValue(value) {
            return typeof value === 'function' ? value() : value;
        }

        // Handle cursor movement for repulsion effect
function enableRepulsionEffect() {
    document.addEventListener('mousemove', function(e) {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        
        // Only apply scale when nav is open
        const navScale = mainContent.classList.contains('nav-open') 
            ? parseFloat(getComputedStyle(root).getPropertyValue('--nav-scale')) || 1
            : 1;

        interactiveElements.forEach(element => {
            const config = elementConfigs[element.id];
            if (!config) return;

            const boxWidth = getValue(config.width) * navScale;
            const boxHeight = getValue(config.height) * navScale;
            const originX = getValue(config.originX) * navScale;
            const originY = getValue(config.originY) * navScale;

            const repulsionRadius = Math.max(boxWidth, boxHeight) / 2;
            const distance = getDistance(cursorX, cursorY, originX, originY);
            const state = elementStates[element.id];

            if (distance < repulsionRadius) {
                state.isRepelled = true;
                const angle = Math.atan2(originY - cursorY, originX - cursorX);
                const constantRepulseDistance = 50; // Fixed repulsion distance for all elements
                const pushX = Math.cos(angle) * constantRepulseDistance;
                const pushY = Math.sin(angle) * constantRepulseDistance * 0.4; // 40% of X repulsion
                element.style.transform = `translate(${pushX}px, ${pushY}px)`;
            } else if (state.isRepelled) {
                state.isRepelled = false;
                element.style.transform = 'translate(0px, 0px)';
            }
        });
    });
}

document.addEventListener('click', (e) => {
            const innerMargin = window.innerWidth * 0.1; // 10% margin on each side
            const innerWidth = window.innerWidth * 0.8;
            const innerHeight = window.innerHeight * 0.8;
            const innerTop = window.innerHeight * 0.1;
            
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            // Check if click is outside the inner 80% area
            const isOutsideInnerArea = 
                clickX < innerMargin || 
                clickX > (innerMargin + innerWidth) || 
                clickY < innerTop || 
                clickY > (innerTop + innerHeight);
            
            // Only close if project window is open and click is outside
            if (isOutsideInnerArea && projectBackground.style.display === 'flex') {
                closeProjectWindow();
            }
        });

interactiveElements.forEach(element => {
    element.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

        const projects = [
            {
                name: "Speed Racer",
                content: document.querySelector('.speed-racer'),
                hash: 'Speed-Racer',
                year: "2026"
            },
            {
                name: "One Piece Titles",
                content: document.querySelector('.one-piece-titles'),
                hash: 'One-Piece-Titles',
                year: "2026"
            }
        ];

        const projectBackground = document.querySelector('.project-background');

        function closeProjectWindow() {
            projectBackground.style.display = 'none';
            projects.forEach(project => {
                project.content.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }

        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach((link, index) => {
            link.addEventListener('click', () => openProjectWindow(index));
        });

        const projectText = document.querySelector('.project-text');
        const projectYear = document.querySelector('.project-year');
        const projectWindow = document.querySelector('.project-window');

        function openProjectWindow(index) {
            projectBackground.style.display = 'flex';
            projects.forEach(project => {
                project.content.style.display = 'none';
            });
            projects[index].content.style.display = 'flex';
            projectWindow.scrollTop = 0; // Reset scroll position to top
            projectText.textContent = projects[index].name;
            projectYear.textContent = projects[index].year;
            document.body.style.overflow = 'hidden';
        }

        const projectCloseBtn = document.querySelector('.project-close-btn');
        projectCloseBtn.addEventListener('click', closeProjectWindow);

        videoElement.addEventListener('ended', function() {
            // Fade in other elements immediately
            LineLandingElement.style.opacity = '1';
            workLandingElement.style.opacity = '1';
            hardLandingElement.style.opacity = '1';
            playLandingElement.style.opacity = '1';
            harderLandingElement.style.opacity = '1';
            
            // Fade out video after 0.2s delay
            setTimeout(function() {
                videoElement.style.opacity = '0';
            }, 200);
            
            // Hide video after everything is done fading
            setTimeout(function() {
                videoElement.style.display = 'none';
                enableRepulsionEffect();
            }, 400);
        });