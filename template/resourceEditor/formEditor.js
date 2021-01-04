'use strict';

module.exports = (_, model, state) =>

_.div({class: 'resource-editor resource-editor--form-editor'},
    _.include(require('template/resourceEditor/inc/header')),
    _.div({class: 'resource-editor__body', name: 'body'},
        state.name === 'error' ? [
            _.div({class: 'widget widget--message centered warn'},
                state.message
            )
        
        ] : state.tab === 'overview' ? [
            _.div({class: 'resource-editor__welcome'},
                _.h1({class: 'resource-editor__welcome__heading'},
                    state.title,
                    _.span({class: `resource-editor__welcome__heading__icon fa fa-${state.icon}`})
                ),
                _.p('Click any item in the panel to edit it.'),
                _.p('Use the context menu (right click or the ', _.span({class: 'fa fa-ellipsis-v'}), ' button) to perform other actions.'),
                _.h2('Actions'),
                _.div({class: 'resource-editor__welcome__actions'},
                    _.button({class: 'widget widget--button condensed', onclick: _.onClickNew, title: 'Create a new form'}, 'New form'),
                    _.button({class: 'widget widget--button condensed', onclick: _.onClickStartTour, title: 'Start a tour of the UI'}, 'Quick tour')
                )
            )
        
        ] : [
            _.field({label: 'Entries'},
                _.div({class: 'widget-group'},
                    _.button({class: 'widget widget--button low', title: 'Clear all entries', onclick: _.onClickClearEntries}, 'Clear'),
                    _.button({class: 'widget widget--button low', title: 'Download a .CSV file containing all entries', onclick: _.onClickDownloadEntries}, 'Download'),
                )
            ),
            _.field({label: 'POST URL'},
                _.div({class: 'widget-group'},
                    _.label({class: 'widget widget--label'}, state.postUrl),
                    _.button({class: 'widget widget--button small fa fa-copy', onclick: _.onClickCopyPostUrl})
                )
            ),
            _.field({label: 'Name'},
                _.text({disabled: model.isLocked, value: model.name, onchange: _.onChangeName})
            ),
            _.field({label: 'Allowed origin', description: 'The address from which submissions will be accepted. Leave blank to accept all.'},
                _.text({disabled: model.isLocked, value: model.allowedOrigin, onchange: _.onChangeAllowedOrigin})
            ),
            _.field({label: 'Redirect URL', description: 'Redirect the client to this URL upon submission.'},
                _.div({class: 'widget-group'},
                    _.text({disabled: model.isLocked, value: model.redirect, onchange: _.onChangeRedirect}),
                    _.checkbox({value: model.appendRedirect, onchange: _.onChangeAppendRedirect, placeholder: 'Append', tooltip: 'Append this URL to the origin'})
                )
            ),
            _.field({label: 'Inputs'},
                _.list({value: state.inputs, placeholder: 'input', sortable: true, readonly: true, onclick: _.onClickEditInput, onchange: _.onChangeInputSorting}) 
            )
        ]
    ),
    _.include(require('template/resourceEditor/inc/footer'))
)
