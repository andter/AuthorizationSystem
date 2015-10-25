using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AuthorizationSystem.Controllers
{
    [RoutePrefix("user")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("login")]
        public IHttpActionResult login(JObject credentials)
        {
            try {
                string email = (string)credentials.GetValue("email");
                string password = (string)credentials.GetValue("password");
                return Ok();
            } catch(Exception ex)
            {
                Console.WriteLine(ex);
                return Unauthorized();
            }
        }

        [HttpPost]
        [Route("new")]
        public IHttpActionResult createUser(JObject user){
            try {
                string email = (string)user.GetValue("email");
                string password = (string)user.GetValue("password");
                string confirm = (string)user.GetValue("confirm");
                string firstName = (string)user.GetValue("firstName");
                string lastName = (string)user.GetValue("lastName");
                return Ok();
            } catch (Exception ex) {
                Console.WriteLine(ex);
                return InternalServerError();
            }
        }
    }
}
