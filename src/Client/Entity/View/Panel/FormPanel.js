'use strict';

/**
 * A panel for form resources
 *
 * @memberof HashBrown.Client.Entity.View.Panel
 */
class FormPanel extends HashBrown.Entity.View.Panel.PanelBase {
    /**
     * Gets available sorting options
     *
     * @return {Object} Options
     */
    getSortingOptions() {
        return {
            'Name': 'name:asc',
            'Changed': 'changed:desc',
            'Created': 'created:desc'
        }
    }
}

module.exports = FormPanel;
