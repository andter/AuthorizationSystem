using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace AuthorizationService
{
    class Program
    {
        static void Main(string[] args)
        {
            using(ServiceHost host = new ServiceHost(typeof(UserService)))
            {
                host.Open();
                Console.WriteLine("AuthorizationService Started");
                Console.WriteLine("<Press enter to close>");
                Console.ReadLine();
            }
        }
    }
}
