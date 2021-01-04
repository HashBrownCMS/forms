'use strict';

// Register namespaces (optional, but highly recommended)
namespace('Entity.View.Modal')
    .add(require('./Entity/View/Modal/EditFormInput'));

namespace('Entity.View.Panel')
    .add(require('./Entity/View/Panel/FormPanel'));

namespace('Entity.View.ResourceEditor')
    .add(require('./Entity/View/ResourceEditor/FormEditor'));

namespace('Entity.Resource')
    .add(require('./Entity/Resource/Form'));

// Add panel, resource editor and resource entities as handlers for the "forms" library
library('forms', 'Forms', 'wpforms')
    .add(HashBrown.Entity.View.Panel.FormPanel)
    .add(HashBrown.Entity.View.ResourceEditor.FormEditor)
    .add(HashBrown.Entity.Resource.Form);
