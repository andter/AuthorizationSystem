using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuthorizationLibrary;

namespace AuthorizationService
{
    class UserService : IUserService
    {
        public void Login()
        {
            Console.WriteLine("Login Called");
        }

        public void Signup()
        {
            Console.WriteLine("Signup Called");
        }
    }
}
