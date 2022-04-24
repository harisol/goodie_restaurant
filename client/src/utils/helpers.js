export const setCookie = (name,value,days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export const eraseCookie = (name) => {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/**
 * 
 * @param {Object} source 
 * @param {Object} destination 
 * @returns {Object}
 */
export const updateMatchingProperties = (source, destination) => {
  Object.keys(source).forEach(key => {
    if (key in destination) {
      destination[key] = source[key];
    }
  });

  return destination;
};

export const alert = (type, msg) => {
  return (
    <div className={`alert alert-${type}`} style={{ whiteSpace: 'pre-wrap' }} role="alert">
      {msg}
    </div>
  );
};

export const arrayToHtmlList = (array) => {
  return (array
    .map((val, i) => <li key={i}>{val}</li>))
};