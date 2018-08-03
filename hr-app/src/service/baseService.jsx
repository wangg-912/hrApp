import React from 'react';
import "whatwg-fetch";
import "es6-promise";
export const FetchHTML = options =>{
    console.log("1")

}
/**
 * 
 * @param {*} options 
 * @param 
 */
export const FetchJSON = options =>{//GET location json
    fetch(options.url,{
        method: 'GET'
    })
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        options.success&&options.success(json);
    }).catch(function (ex) {
        options.error&&options.error(ex);
        console.log('parsing failed', ex)
    })
}
/**
 * 
 * @param {*} options 
 */
export const FetchGET = options =>{ //GET service or GET location
    fetch(options.url)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        options.success&&options.success(json);
    }).catch(function(ex) {
        options.error&&options.error(ex);
        console.log('parsing failed', ex)
    })
}
/**
 * 
 * @param {*} options 
 */
export const FetchPOST = options =>{
    fetch(options.url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.data)
    })
    .then(checkStatus)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        options.success&&options.success(json);
    }).catch(function (ex) {
        options.error&&options.error(ex);
        console.log('parsing failed', ex)
    })
}
/**
 * 
 * @param {*} options 
 */
export const FetchPostForm = options =>{
    let formData = new FormData(options.form);
    fetch( options.url, {
        method: 'POST',
        body: formData
    })
    .then(checkStatus)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        options.success&&options.success(json);
    }).catch(function (ex) {
        options.error&&options.error(ex);
        console.log('parsing failed', ex)
    })
}
/**
 * 
 * @param {*} options 
 */
export const FetchPUT = options =>{
    fetch(options.url,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.data)
    })
    .then(checkStatus)
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        options.success&&options.success(json);
    }).catch(function (ex) {
        options.error&&options.error(ex);
        console.log('parsing failed', ex)
    })
}
/**
 * 
 * @param {*} options 
 */
export const FetchDELETE = options =>{
    fetch(options.url,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.data)
    })
    .then(checkStatus)
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        options.success&&options.success(json);
    }).catch(function (ex) {
        options.error&&options.error(ex);
        console.log('parsing failed', ex)
    })
}
/**
 * 
 */

export const FetchFileUpload = options =>{
    //TOOD
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
}
