import Cookie from 'js-cookie'
import {jwtDecode} from 'jwt-decode'
export default function getCookie()
{
    return Cookie.get('x-token') || null;  // if no token, return null. Otherwise, return the token.  // This function should be called whenever a request is made to the server to check if the user is authenticated. If the user is authenticated, the server will send a JWT (JSON Web Token) in the response header, and this function will extract and return the token from the header. If the user is not authenticated, the server will send an HTTP 401 Unauthorized response, and this function will return null.
 
}
export function validateToken(token) {
    try {
      // Decode the token (this does not verify the signature)
      const decoded = jwtDecode(token);
     
      return { valid: true, data: decoded.user};
    } catch (error) {
      return { valid: false, reason: "Invalid token" };
    }
  }