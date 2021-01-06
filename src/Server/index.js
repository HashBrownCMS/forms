'use strict';

// Register namespaces (optional, but highly recommended)
namespace('Controller')
    .add(require('./Controller/FormController'));

namespace('Entity.Resource')
    .add(require('./Entity/Resource/Form'));

// Add resource entity and controller as handlers for the "forms" library
library('forms', 'Forms', 'wpforms')
    .add(HashBrown.Entity.Resource.Form)
    .add(HashBrown.Controller.FormController);
