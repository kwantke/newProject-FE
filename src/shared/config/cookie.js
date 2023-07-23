import Cookies from 'universal-cookie';
import {buildTimeValue} from "@testing-library/user-event/dist/utils";

export const cookies = new Cookies();

export const getCookie = (name) => {
  return cookies.get(name);
}

export const setCookie = (name, value) => {
  return cookies.set(name, value,{
    path: "/"
  });
}

export const deleteCookie = (name) => {
  return cookies.remove(name, {
    path: "/"
  })
}
