'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('flux/utils');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var _ArchiveActionCreators = require('../actions/ArchiveActionCreators');

var _ArchiveActionCreators2 = _interopRequireDefault(_ArchiveActionCreators);

var _ArchiveStore = require('../stores/ArchiveStore');

var _ArchiveStore2 = _interopRequireDefault(_ArchiveStore);

var _AvatarItem = require('./common/AvatarItem.react');

var _AvatarItem2 = _interopRequireDefault(_AvatarItem);

var _ConnectionState = require('./common/ConnectionState.react');

var _ConnectionState2 = _interopRequireDefault(_ConnectionState);

var _Scrollbar = require('./common/Scrollbar.react');

var _Scrollbar2 = _interopRequireDefault(_Scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Archive = (function (_Component) {
  _inherits(Archive, _Component);

  function Archive(props) {
    _classCallCheck(this, Archive);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Archive).call(this, props));
  }

  _createClass(Archive, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _ArchiveActionCreators2.default.loadArchivedDialogs();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var isLoading = _state.isLoading;
      var dialogs = _state.dialogs;

      var archiveClassname = (0, _classnames2.default)('archive-section', {
        'archive-section--loading': isLoading
      });

      var dialogsList = (0, _lodash.map)(dialogs, function (dialog, index) {
        var counter = dialog.counter;
        var peer = dialog.peer;

        return _react2.default.createElement(
          'div',
          { className: 'archive-section__list__item col-xs-12 col-sm-6 col-md-4', key: index },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/im/' + peer.peer.key, className: 'archive-item row' },
            _react2.default.createElement(
              'div',
              { className: 'archive-item__avatar' },
              _react2.default.createElement(_AvatarItem2.default, { image: peer.avatar,
                placeholder: peer.placeholder,
                size: 'medium',
                title: peer.title }),
              counter !== 0 ? _react2.default.createElement(
                'div',
                { className: 'archive-item__counter' },
                counter
              ) : null
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs' },
              _react2.default.createElement(
                'h4',
                { className: 'archive-item__title' },
                peer.title
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'section',
        { className: 'main' },
        _react2.default.createElement(
          'header',
          { className: 'toolbar row' },
          _react2.default.createElement(
            'h3',
            null,
            'Archive'
          )
        ),
        _react2.default.createElement(_ConnectionState2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'flexrow' },
          _react2.default.createElement(
            'section',
            { className: archiveClassname },
            _react2.default.createElement(
              _Scrollbar2.default,
              null,
              _react2.default.createElement(
                'div',
                { className: 'archive-section__list row' },
                dialogs.length !== 0 ? dialogsList : !isLoading ? _react2.default.createElement(
                  'div',
                  { className: 'archive-section__list__item archive-section__list__item--empty col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'No dialogs in archive'
                  )
                ) : null,
                isLoading ? _react2.default.createElement(
                  'div',
                  { className: 'archive-section__list__item archive-section__list__item--loading col-xs-12' },
                  _react2.default.createElement(
                    'div',
                    { className: 'preloader' },
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement('div', null)
                  )
                ) : null
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'calculateState',
    value: function calculateState() {
      return {
        isLoading: _ArchiveStore2.default.isArchiveLoading(),
        dialogs: _ArchiveStore2.default.getDialogs()
      };
    }
  }]);

  return Archive;
})(_react.Component);

Archive.getStores = function () {
  return [_ArchiveStore2.default];
};

Archive.contextTypes = {
  intl: _react.PropTypes.object
};
exports.default = _utils.Container.create(Archive, { pure: false });
//# sourceMappingURL=Archive.react.js.map