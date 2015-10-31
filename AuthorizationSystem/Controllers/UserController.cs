using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AuthorizationLibrary;
using System.Diagnostics;

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
                List<User> users = new List<User>();
                using (UserDB database = new UserDB())
                {
                    User user = new User() { username = email, password = password };
                    database.Users.Add(user);
                    database.SaveChanges();
                }
                return Ok();
            } catch(Exception ex)
            {
                Debug.WriteLine(ex);
                return Unauthorized();
            }
        }

        [HttpPost]
        [Route("new")]
        public IHttpActionResult createUser(JObject user){
            try {
              //  DataContext db = new DataContext(@"Data Source=.\SQLExpress;Initial Catalog=AuthorizationSystem;Integrated Security=True");
              //  Table<User> users = db.GetTable<User>();
               // var query = from u in users
               //             select user;
               // foreach(var u in query)
               // {
                //    Console.WriteLine(u);
                //}
                string email = (string)user.GetValue("email");
                string password = (string)user.GetValue("password");
                return Ok();
            } catch (Exception ex) {
                Console.WriteLine(ex);
                return InternalServerError();
            }
        }
    }
}
