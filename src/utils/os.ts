export function getOS() {
    let OSName = "Unknown";
    if (window.navigator.userAgent.includes("Windows")) OSName="Windows";
    else if(window.navigator.userAgent.includes("Android")) OSName="Android";
    else if (window.navigator.userAgent.indexOf("Mac")) OSName="Mac/IOS";
    else if (window.navigator.userAgent.indexOf("X11")) OSName="UNIX";
    else if (window.navigator.userAgent.indexOf("Linux")) OSName="Linux";
    return OSName;
}

export function getPlatformType(){
    const os = getOS();

    if(os == "Android" || os == "Max/IOS"){
        return "Phone";
    }
    return "PC";
}