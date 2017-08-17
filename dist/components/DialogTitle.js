Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/DialogTitle.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Constants=require('../constants/Constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var babelPluginFlowReactPropTypes_proptype_DialogTitleType=require('../Type').babelPluginFlowReactPropTypes_proptype_DialogTitleType||require('prop-types').any;var DEFAULT_TITLE_ALIGN='center';var HAVE_TITLE_BAR=true;var styles=_reactNative.StyleSheet.create({title:{padding:24,borderTopLeftRadius:8,borderTopRightRadius:8},titleBar:{padding:14,borderBottomWidth:0.5,backgroundColor:'#F9F9FB',borderColor:'#DAD9DC'},titleText:{color:'#7F7D89',fontSize:16}});function DialogTitle(_ref){var title=_ref.title,titleStyle=_ref.titleStyle,titleTextStyle=_ref.titleTextStyle,haveTitleBar=_ref.haveTitleBar,titleAlign=_ref.titleAlign;var titleBar=haveTitleBar?styles.titleBar:null;var titleItemsAlign={alignItems:_Constants.Positions[titleAlign]};return _react2.default.createElement(_reactNative.View,{style:[styles.title,titleItemsAlign,titleBar,titleStyle],__source:{fileName:_jsxFileName,lineNumber:41}},_react2.default.createElement(_reactNative.Text,{style:[styles.titleText,titleTextStyle],__source:{fileName:_jsxFileName,lineNumber:42}},title));}DialogTitle.propTypes=babelPluginFlowReactPropTypes_proptype_DialogTitleType===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_DialogTitleType;DialogTitle.defaultProps={titleAlign:DEFAULT_TITLE_ALIGN,haveTitleBar:HAVE_TITLE_BAR};exports.default=DialogTitle;