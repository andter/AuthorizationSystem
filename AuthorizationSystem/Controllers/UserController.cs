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
            return Ok();
        }
    }
}
