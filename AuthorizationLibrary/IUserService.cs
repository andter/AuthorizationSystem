using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;


namespace AuthorizationLibrary
{
    [ServiceContract]
    public interface IUserService
    {
        [OperationContract]
        void Login();

        [OperationContract]
        void Signup();
    }
}
