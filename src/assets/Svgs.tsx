import { SvgXml } from 'react-native-svg';

import { AppTheme } from '@styles/AppTheme';
import { SvgStyle } from '@styles/SvgStyle';

import { KBLogoProps } from './home/KbLogoProps';

export const KB_LOGO: React.FC<KBLogoProps> = ({ width = 40, height = 40 }) => {
  const svgXml = `
<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=${width} height=${height} viewBox="0 0 50 40">
  <g id="kb-logo">
  <rect id="Rectangle_2" data-name="Rectangle 2" width="44" height="44" fill="#ffc709"/>
  <path id="Path_47" data-name="Path 47" d="M161.4,66.675a5.777,5.777,0,0,0-4.351-1.888,4.875,4.875,0,0,0-4.041,1.814V60.2H148.7v2.389h1.062V77.56h3.1V75.849a4.592,4.592,0,0,0,4.071,2.021,5.905,5.905,0,0,0,4.528-1.888,6.837,6.837,0,0,0,1.637-4.646A6.924,6.924,0,0,0,161.4,66.675Zm-1.563,4.646a3.7,3.7,0,0,1-.944,2.507,3.548,3.548,0,1,1-2.6-6.106,3.448,3.448,0,0,1,2.6,1.091A3.724,3.724,0,0,1,159.836,71.321Z" transform="translate(-126.767 -51.321)" fill="#010c03"/>
  <path id="Path_48" data-name="Path 48" d="M65.324,75.035a1.858,1.858,0,0,1-1.4-.678l-2.979-3.51,5.369-5.679H62.124l-4.631,4.985V60.3H53.2v2.389h1.062V77.646h3.23V71.525L61,75.817c1.106,1.5,1.947,1.991,3.466,1.991a9.718,9.718,0,0,0,1.667-.133l.059-.015V75.05C66.209,75.035,65.457,75.035,65.324,75.035Z" transform="translate(-45.353 -51.406)" fill="#010c03"/>
  <path id="Path_49" data-name="Path 49" d="M64.615,195v2.537H61.842V195H60.5v6.357h1.342V198.82h2.773v2.537h1.357V195Z" transform="translate(-51.576 -166.238)" fill="#010c03"/>
  <path id="Path_50" data-name="Path 50" d="M107.745,194.5a3.26,3.26,0,1,0,3.245,3.26A3.258,3.258,0,0,0,107.745,194.5Zm1.917,3.245a1.9,1.9,0,1,1-1.9-1.917A1.911,1.911,0,0,1,109.662,197.745Z" transform="translate(-89.087 -165.812)" fill="#010c03"/>
  <path id="Path_51" data-name="Path 51" d="M161.021,195l-1.976,2.758L157.157,195H155.8v6.357h1.357v-3.982l1.888,2.743,1.9-2.758v4H162.3V195Z" transform="translate(-132.82 -166.238)" fill="#010c03"/>
  <path id="Path_52" data-name="Path 52" d="M214.476,196.283V195H209.8v6.357h4.676v-1.268h-3.333V198.82h2.507v-1.283h-2.507v-1.254Z" transform="translate(-178.855 -166.238)" fill="#010c03"/>
</g>
</svg>`;

  return <SvgXml xml={svgXml} width={`${width}`} height={`${height}`} />;
};

export const STATUS_COMPLETE_ICON = () => {
  const svgXml = `
   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <g id="icon-upload-succesful" transform="translate(-515 15417)">
      <rect id="Rectangle_13764" data-name="Rectangle 13764" width="40" height="40" rx="8" transform="translate(515 -15417)" fill="#dffbed"/>
      <path id="cloud_done_FILL1_wght400_GRAD0_opsz24" d="M50.2-785.375l6.164-6.356-1.582-1.631-4.609,4.753-2.291-2.362-1.555,1.6ZM46-782a5.759,5.759,0,0,1-4.241-1.772A5.914,5.914,0,0,1,40-788.1a6.362,6.362,0,0,1,1.282-3.909,5.654,5.654,0,0,1,3.355-2.194,7.65,7.65,0,0,1,2.727-4.191A7.317,7.317,0,0,1,52-800a7.256,7.256,0,0,1,5.414,2.292,7.72,7.72,0,0,1,2.223,5.583,4.717,4.717,0,0,1,3.123,1.673A5.047,5.047,0,0,1,64-787.062a4.961,4.961,0,0,1-1.432,3.586A4.663,4.663,0,0,1,59.091-782Z" transform="translate(483 -14606)" fill="#01a981"/>
    </g>
  </svg>`;

  return <SvgXml xml={svgXml} width='35' height='35' />;
};

export const STATUS_FAILED_ICON = () => {
  const svgXml = `
 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="icon-upload-failed" transform="translate(-515 15293)">
    <rect id="Rectangle_13766" data-name="Rectangle 13766" width="40" height="40" rx="8" transform="translate(515 -15293)" fill="#ffd5d5"/>
    <path id="cloud_off_FILL1_wght400_GRAD0_opsz24" d="M60.509-826l-2.891-2.889H46a5.736,5.736,0,0,1-4.255-1.778A5.953,5.953,0,0,1,40-835a6.034,6.034,0,0,1,1.3-3.806,5.755,5.755,0,0,1,3.341-2.139q.082-.222.164-.43t.164-.458l-4.527-4.611L41.964-848l20.073,20.444Zm1.964-4.278L47.691-845.306a7.613,7.613,0,0,1,2.032-1.014A7.379,7.379,0,0,1,52-846.667a7.3,7.3,0,0,1,5.414,2.264,7.575,7.575,0,0,1,2.223,5.514,4.734,4.734,0,0,1,3.123,1.653A4.949,4.949,0,0,1,64-833.889a4.948,4.948,0,0,1-.409,2.014A4.835,4.835,0,0,1,62.473-830.278Z" transform="translate(483 -14436)" fill="#f43d3e"/>
  </g>
</svg>`;

  return <SvgXml xml={svgXml} width='35' height='35' />;
};

export const STATUS_PENDING_ICON = () => {
  const svgXml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="icon-upload-pending" transform="translate(-515 15355)">
    <rect id="Rectangle_13765" data-name="Rectangle 13765" width="40" height="40" rx="8" transform="translate(515 -15355)" fill="#ffeac9"/>
    <path id="cloud_upload_FILL1_wght400_GRAD0_opsz24" d="M50.909-782H46a5.759,5.759,0,0,1-4.241-1.772A5.914,5.914,0,0,1,40-788.1a6.362,6.362,0,0,1,1.282-3.909,5.653,5.653,0,0,1,3.355-2.194,7.65,7.65,0,0,1,2.727-4.191A7.318,7.318,0,0,1,52-800a7.256,7.256,0,0,1,5.414,2.292,7.72,7.72,0,0,1,2.223,5.583,4.717,4.717,0,0,1,3.123,1.673A5.047,5.047,0,0,1,64-787.062a4.96,4.96,0,0,1-1.432,3.586A4.662,4.662,0,0,1,59.091-782h-6v-8.044l1.745,1.744,1.527-1.575L52-794.375l-4.364,4.5,1.527,1.575,1.745-1.744Z" transform="translate(483 -14544)" fill="#ff9d00"/>
  </g>
</svg>`;

  return <SvgXml xml={svgXml} width='35' height='35' />;
};

export const RED_CIRCLE_ICON = () => {
  const svgXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
<circle id="Ellipse_2870" data-name="Ellipse 2870" cx="5" cy="5" r="5" fill="#ed0201"/>
</svg>`;

  return <SvgXml xml={svgXml} width='35' height='35' />;
};

export const DOUBLE_RIGHT_ICON = () => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="13.828" height="14.828" viewBox="0 0 13.828 14.828">
  <g id="Group_44433" data-name="Group 44433" transform="translate(-375.586 -290.586)">
    <path id="Path_25133" data-name="Path 25133" d="M-469.969-17705.5l6,6,6-6" transform="translate(18087.498 -165.969) rotate(-90)" fill="none" stroke="#2836f0" stroke-linecap="round" stroke-width="2"/>
    <path id="Path_25134" data-name="Path 25134" d="M-469.969-17705.5l6,6,6-6" transform="translate(18082.498 -165.969) rotate(-90)" fill="none" stroke="#2836f0" stroke-linecap="round" stroke-width="2"/>
  </g>
</svg>`;

  return <SvgXml xml={svgXml} width='15' height='15' />;
};

export const CIRCLE_OUTLINE = () => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Ellipse_2884" data-name="Ellipse 2884" fill="#fff" stroke="#2836f0" stroke-width="1">
    <circle cx="11" cy="11" r="11" stroke="none"/>
    <circle cx="11" cy="11" r="10.5" fill="none"/>
  </g>
</svg>`;

  return (
    <SvgXml
      xml={svgXml}
      width='20'
      height='20'
      style={SvgStyle.sliceCircleIcon}
    />
  );
};

export const CIRCLE_WITH_FILLING = () => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Ellipse_2884" data-name="Ellipse 2884" fill="#fff" stroke="#2836f0" stroke-width="1">
    <circle cx="11" cy="11" r="11" stroke="none"/>
    <circle cx="11" cy="11" r="10.5" fill="none"/>
    <circle cx="11" cy="11" r="7" stroke="#2836f0"/>
    <circle cx="11" cy="11" r="6.5" fill="#2836f0"/>
  </g>
</svg>`;

  return (
    <SvgXml
      xml={svgXml}
      width='20'
      height='20'
      style={SvgStyle.sliceCircleIcon}
    />
  );
};

export const SIGN_OUT_ICON = () => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="profile-svgrepo-com" transform="translate(-1 -1)">
    <path id="Path_155" data-name="Path 155" d="M16,9a4,4,0,1,1-4-4A4,4,0,0,1,16,9ZM14,9a2,2,0,1,1-2-2A2,2,0,0,1,14,9Z" fill-rule="evenodd"/>
    <path id="Path_156" data-name="Path 156" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1ZM3,12a8.961,8.961,0,0,0,1.908,5.542,9,9,0,0,1,14.249-.083A9,9,0,1,0,3,12Zm9,9a8.963,8.963,0,0,1-5.672-2.012,7,7,0,0,1,11.426-.067A8.964,8.964,0,0,1,12,21Z" fill-rule="evenodd"/>
  </g>
</svg>`;

  return <SvgXml xml={svgXml} width='20' height='20' />;
};

export const UNREAD_COUNT_INDICATOR = () => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
    <circle id="Ellipse_2870" data-name="Ellipse 2870" cx="5" cy="5" r="5" fill="#ed0201"/>
  </svg>`;

  return (
    <SvgXml
      xml={svgXml}
      width='9'
      height='9'
      style={SvgStyle.unreadCountIndicator}
    />
  );
};

export const SINGLE_RIGHT_ICON = () => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="11.121" height="19.414" viewBox="0 0 11.121 19.414">
  <path id="Path_72" data-name="Path 72" d="M-21604.725-12929.841l9,9-9,9" transform="translate(21605.432 12930.548)" fill="none" stroke="#040c05" stroke-width="2"/>
</svg>`;

  return <SvgXml xml={svgXml} width='18' height='18' />;
};

export const SINGLE_LEFT_ICON = () => {
  const svgXml = `<svg fill="#000000" width="50" height="50" viewBox="-4.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M8.4 17.269a1.026 1.026 0 0 1-.727-.302l-6.801-6.8a1.03 1.03 0 0 1 0-1.456l6.8-6.8a1.03 1.03 0 0 1 1.456 1.455L3.055 9.439l6.073 6.073A1.03 1.03 0 0 1 8.4 17.27z"/></svg>
  `;

  return (
    <SvgXml
      xml={svgXml}
      width='25'
      height='30'
      style={SvgStyle.headerCrossIcon}
    />
  );
};

export const HEADER_CROSS_ICON = () => {
  const svgXml = `<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
  </svg>`;

  return (
    <SvgXml
      xml={svgXml}
      width='23'
      height='23'
      style={SvgStyle.headerCrossIcon}
    />
  );
};

export const HEADER_HOME_ICON = ({ color = AppTheme.colors.black }) => {
  const svgXml = `<svg fill="${color}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="100" height="100" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path d="M83.505,37.85L51.013,12.688c-0.915-0.707-2.197-0.698-3.1,0.025L16.46,37.874c-0.592,0.474-0.939,1.195-0.939,1.956v45.5
 c0,1.385,1.121,2.505,2.505,2.505h18.697c1.382,0,2.505-1.121,2.505-2.505V57.471h21.54V85.33c0,1.385,1.123,2.505,2.505,2.505h18.7
 c1.382,0,2.505-1.121,2.505-2.505v-45.5C84.479,39.055,84.119,38.324,83.505,37.85z"/>
</svg>`;

  return (
    <SvgXml
      xml={svgXml}
      width='28'
      height='28'
      style={SvgStyle.headerCrossIcon}
    />
  );
};

export const PENDING_STATUS_ICON = () => {
  const svgXml = `<svg fill="#000000" width="50" height="50" viewBox="0 -1.5 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <title>upload1</title>
  <path d="M29.426 15.535c0 0 0.649-8.743-7.361-9.74-6.865-0.701-8.955 5.679-8.955 5.679s-2.067-1.988-4.872-0.364c-2.511 1.55-2.067 4.388-2.067 4.388s-5.576 1.084-5.576 6.768c0.124 5.677 6.054 5.734 6.054 5.734h9.351v-6h-3l5-5 5 5h-3v6h8.467c0 0 5.52 0.006 6.295-5.395 0.369-5.906-5.336-7.070-5.336-7.070z"></path>
  </svg>`;

  return <SvgXml xml={svgXml} width='25' height='25' />;
};

export const PHOTOS_PREVIEW_SQUARE_ICON = () => {
  const svgXml = `<svg fill="#000000" width="28" height="28" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/>
  </svg>`;

  return <SvgXml xml={svgXml} />;
};

export const PHOTOS_PREVIEW_SQUARE_CHECKED_ICON = () => {
  const svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="">
  <g id="Group_44609" data-name="Group 44609" transform="translate(3335 -14346)">
 <g id="Group_44611" data-name="Group 44611" transform="translate(12394 8654)">
    <rect id="Rectangle_13882" data-name="Rectangle 13882" width="26" height="26" rx="4" transform="translate(-15729 5692)" fill="#2836f0"/>
    <path id="done_FILL1_wght400_GRAD0_opsz24" d="M159.6-709l-5.6-5.688,1.4-1.422,4.2,4.266L168.6-721l1.4,1.422Z" transform="translate(-15878 6420)" fill="#fff"/>
  </g>
 </g>
</svg>`;

  return <SvgXml xml={svgXml} />;
};
