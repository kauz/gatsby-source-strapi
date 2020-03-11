'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('gatsby-source-filesystem'),
    createRemoteFileNode = _require.createRemoteFileNode;

var extractFields = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(apiURL, store, cache, createNode, createNodeId, touchNode, auth, item) {
    var key = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'localFile';

    var fileNodeID, mediaDataCacheKey, cacheMediaData, source_url, fileNode, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _key, field, _fileNodeID;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(item && item.hasOwnProperty('mime'))) {
              _context2.next = 27;
              break;
            }

            fileNodeID = void 0;
            // using field on the cache key for multiple image field

            mediaDataCacheKey = 'strapi-media-' + item.id + '-' + key;
            _context2.next = 5;
            return cache.get(mediaDataCacheKey);

          case 5:
            cacheMediaData = _context2.sent;


            // If we have cached media data and it wasn't modified, reuse
            // previously created file node to not try to redownload
            if (cacheMediaData && item.updatedAt === cacheMediaData.updatedAt) {
              fileNodeID = cacheMediaData.fileNodeID;
              touchNode({ nodeId: cacheMediaData.fileNodeID });
            }

            // If we don't have cached data, download the file

            if (fileNodeID) {
              _context2.next = 21;
              break;
            }

            _context2.prev = 8;

            // full media url
            source_url = '' + (item.url.startsWith('http') ? '' : apiURL) + item.url;
            _context2.next = 12;
            return createRemoteFileNode({
              url: source_url,
              store: store,
              cache: cache,
              createNode: createNode,
              createNodeId: createNodeId,
              auth: auth
            });

          case 12:
            fileNode = _context2.sent;

            if (!fileNode) {
              _context2.next = 17;
              break;
            }

            fileNodeID = fileNode.id;

            _context2.next = 17;
            return cache.set(mediaDataCacheKey, {
              fileNodeID: fileNodeID,
              updatedAt: item.updatedAt
            });

          case 17:
            _context2.next = 21;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2['catch'](8);

          case 21:
            if (!fileNodeID) {
              _context2.next = 25;
              break;
            }

            if (!(key !== 'localFile')) {
              _context2.next = 24;
              break;
            }

            return _context2.abrupt('return', fileNodeID);

          case 24:

            item.localFile___NODE = fileNodeID;

          case 25:
            _context2.next = 62;
            break;

          case 27:
            if (!Array.isArray(item)) {
              _context2.next = 32;
              break;
            }

            _context2.next = 30;
            return _promise2.default.all(item.map(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(f) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt('return', extractFields(apiURL, store, cache, createNode, createNodeId, touchNode, auth, f));

                      case 1:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x10) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 30:
            _context2.next = 62;
            break;

          case 32:
            if (!(item && (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object')) {
              _context2.next = 62;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 36;
            _iterator = (0, _getIterator3.default)((0, _keys2.default)(item));

          case 38:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 48;
              break;
            }

            _key = _step.value;
            field = item[_key];
            _context2.next = 43;
            return extractFields(apiURL, store, cache, createNode, createNodeId, touchNode, auth, field, _key);

          case 43:
            _fileNodeID = _context2.sent;


            if (_fileNodeID) {
              item[_key + '___NODE'] = _fileNodeID;
            }

          case 45:
            _iteratorNormalCompletion = true;
            _context2.next = 38;
            break;

          case 48:
            _context2.next = 54;
            break;

          case 50:
            _context2.prev = 50;
            _context2.t1 = _context2['catch'](36);
            _didIteratorError = true;
            _iteratorError = _context2.t1;

          case 54:
            _context2.prev = 54;
            _context2.prev = 55;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 57:
            _context2.prev = 57;

            if (!_didIteratorError) {
              _context2.next = 60;
              break;
            }

            throw _iteratorError;

          case 60:
            return _context2.finish(57);

          case 61:
            return _context2.finish(54);

          case 62:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[8, 19], [36, 50, 54, 62], [55,, 57, 61]]);
  }));

  return function extractFields(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
    return _ref.apply(this, arguments);
  };
}();

// Downloads media from image type fields
exports.downloadMediaFiles = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref4) {
    var entities = _ref4.entities,
        apiURL = _ref4.apiURL,
        store = _ref4.store,
        cache = _ref4.cache,
        createNode = _ref4.createNode,
        createNodeId = _ref4.createNodeId,
        touchNode = _ref4.touchNode,
        auth = _ref4.jwtToken;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', _promise2.default.all(entities.map(function () {
              var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(entity) {
                var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context3.prev = 3;
                        _iterator2 = (0, _getIterator3.default)(entity);

                      case 5:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                          _context3.next = 12;
                          break;
                        }

                        item = _step2.value;
                        _context3.next = 9;
                        return extractFields(apiURL, store, cache, createNode, createNodeId, touchNode, auth, item);

                      case 9:
                        _iteratorNormalCompletion2 = true;
                        _context3.next = 5;
                        break;

                      case 12:
                        _context3.next = 18;
                        break;

                      case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3['catch'](3);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context3.t0;

                      case 18:
                        _context3.prev = 18;
                        _context3.prev = 19;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }

                      case 21:
                        _context3.prev = 21;

                        if (!_didIteratorError2) {
                          _context3.next = 24;
                          break;
                        }

                        throw _iteratorError2;

                      case 24:
                        return _context3.finish(21);

                      case 25:
                        return _context3.finish(18);

                      case 26:
                        return _context3.abrupt('return', entity);

                      case 27:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, undefined, [[3, 14, 18, 26], [19,, 21, 25]]);
              }));

              return function (_x12) {
                return _ref5.apply(this, arguments);
              };
            }())));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x11) {
    return _ref3.apply(this, arguments);
  };
}();