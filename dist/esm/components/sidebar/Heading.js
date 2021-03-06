function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import "core-js/modules/es.string.bold.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import React from 'react';
import { styled } from '@storybook/theming';
import { Button } from '@storybook/components';
import { Brand } from './Brand';
import { SidebarMenu } from './Menu';
var BrandArea = styled.div(function (_ref) {
  var theme = _ref.theme;
  return {
    fontSize: theme.typography.size.s2,
    fontWeight: theme.typography.weight.bold,
    color: theme.color.defaultText,
    marginRight: 20,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    minHeight: 22,
    '& > *': {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      flex: '1 1 auto'
    }
  };
});
var HeadingWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative'
});
var SkipToCanvasLink = styled(Button)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    display: 'none',
    '@media (min-width: 600px)': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      padding: '10px 15px',
      fontSize: theme.typography.size.s1,
      zIndex: 1,
      transform: 'translate(0,-100px)',
      '&:focus': {
        transform: 'translate(0)'
      }
    }
  };
});
export var Heading = function Heading(_ref3) {
  var _ref3$menuHighlighted = _ref3.menuHighlighted,
      menuHighlighted = _ref3$menuHighlighted === void 0 ? false : _ref3$menuHighlighted,
      menu = _ref3.menu,
      skipLinkHref = _ref3.skipLinkHref,
      props = _objectWithoutProperties(_ref3, ["menuHighlighted", "menu", "skipLinkHref"]);

  return /*#__PURE__*/React.createElement(HeadingWrapper, props, skipLinkHref && /*#__PURE__*/React.createElement(SkipToCanvasLink, {
    secondary: true,
    isLink: true,
    tabIndex: 0,
    href: skipLinkHref
  }, "Skip to canvas"), /*#__PURE__*/React.createElement(BrandArea, null, /*#__PURE__*/React.createElement(Brand, null)), /*#__PURE__*/React.createElement(SidebarMenu, {
    menu: menu,
    isHighlighted: menuHighlighted
  }));
};
Heading.displayName = "Heading";