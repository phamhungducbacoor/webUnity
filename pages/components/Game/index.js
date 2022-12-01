import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


const Game = () => {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "Build.loader.js",
        dataUrl: "Build.data",
        frameworkUrl: "Build.framework.js",
        codeUrl: "Build.wasm",
      });
      return (
        <>
          {!isLoaded && (
            <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
          )}
          <Unity
            unityProvider={unityProvider}
            style={{ width:'50vw',height:'50vh', visibility: isLoaded ? "visible" : "hidden" }}
          />
        </>
      );
    }

export default Game