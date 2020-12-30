'use strict';

namespace('Controller')
.add(require('./Controller/FormController'));

namespace('Entity.Resource')
.add(require('./Entity/Resource/Form'));

library('forms', 'Forms', 'wpforms')
    .add(HashBrown.Entity.Resource.Form)
    .add(HashBrown.Controller.FormController);

