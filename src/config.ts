export const PLUGINS = [
  {
    id: 'removeDoctype',
    name: 'Remove doctype',
    enabledByDefault: true,
  },
  {
    id: 'removeXMLProcInst',
    name: 'Remove XML instructions',
    enabledByDefault: true,
  },
  {
    id: 'removeComments',
    name: 'Remove comments',
    enabledByDefault: true,
  },
  {
    id: 'removeMetadata',
    name: 'Remove <metadata>',
    enabledByDefault: true,
  },
  {
    id: 'removeXMLNS',
    name: 'Remove xmlns',
    enabledByDefault: false,
  },
  {
    id: 'removeEditorsNSData',
    name: 'Remove editor data',
    enabledByDefault: true,
  },
  {
    id: 'cleanupAttrs',
    name: 'Clean up attribute whitespace',
    enabledByDefault: true,
  },
  {
    id: 'mergeStyles',
    name: 'Merge styles',
    enabledByDefault: true,
  },
  {
    id: 'inlineStyles',
    name: 'Inline styles',
    enabledByDefault: true,
  },
  {
    id: 'minifyStyles',
    name: 'Minify styles',
    enabledByDefault: true,
  },
  {
    id: 'convertStyleToAttrs',
    name: 'Style to attributes',
    enabledByDefault: false,
  },
  // doesn't work
  // {
  //   "id": "cleanupIDs",
  //   "name": "Clean up IDs",
  //   "enabledByDefault": true
  // },
  {
    id: 'removeRasterImages',
    name: 'Remove raster images',
    enabledByDefault: false,
  },
  {
    id: 'removeUselessDefs',
    name: 'Remove unused defs',
    enabledByDefault: true,
  },
  {
    id: 'cleanupNumericValues',
    name: 'Round/rewrite numbers',
    enabledByDefault: true,
  },
  {
    id: 'cleanupListOfValues',
    name: 'Round/rewrite number lists',
    enabledByDefault: false,
  },
  {
    id: 'convertColors',
    name: 'Minify colours',
    enabledByDefault: true,
  },
  {
    id: 'removeUnknownsAndDefaults',
    name: 'Remove unknowns & defaults',
    enabledByDefault: false,
  },
  {
    id: 'removeNonInheritableGroupAttrs',
    name: 'Remove unneeded group attrs',
    enabledByDefault: true,
  },
  {
    id: 'removeUselessStrokeAndFill',
    name: 'Remove useless stroke & fill',
    enabledByDefault: true,
  },
  {
    id: 'removeViewBox',
    name: 'Remove viewBox',
    enabledByDefault: false,
  },
  {
    id: 'cleanupEnableBackground',
    name: 'Remove/tidy enable-background',
    enabledByDefault: true,
  },
  {
    id: 'removeHiddenElems',
    name: 'Remove hidden elements',
    enabledByDefault: true,
  },
  {
    id: 'removeEmptyText',
    name: 'Remove empty text',
    enabledByDefault: true,
  },
  {
    id: 'convertShapeToPath',
    name: 'Shapes to (smaller) paths',
    enabledByDefault: true,
  },
  {
    id: 'moveElemsAttrsToGroup',
    name: 'Move attrs to parent group',
    enabledByDefault: true,
  },
  {
    id: 'moveGroupAttrsToElems',
    name: 'Move group attrs to elements',
    enabledByDefault: true,
  },
  {
    id: 'collapseGroups',
    name: 'Collapse useless groups',
    enabledByDefault: true,
  },
  {
    id: 'convertPathData',
    name: 'Round/rewrite paths',
    enabledByDefault: true,
  },
  {
    id: 'convertEllipseToCircle',
    name: 'Convert non-eccentric <ellipse> to <circle>',
    enabledByDefault: true,
  },
  {
    id: 'convertTransform',
    name: 'Round/rewrite transforms',
    enabledByDefault: true,
  },
  {
    id: 'removeEmptyAttrs',
    name: 'Remove empty attrs',
    enabledByDefault: true,
  },
  {
    id: 'removeEmptyContainers',
    name: 'Remove empty containers',
    enabledByDefault: true,
  },
  {
    id: 'mergePaths',
    name: 'Merge paths',
    enabledByDefault: true,
  },
  {
    id: 'removeUnusedNS',
    name: 'Remove unused namespaces',
    enabledByDefault: true,
  },
  {
    id: 'reusePaths',
    name: 'Replace duplicate elements with links',
    enabledByDefault: false,
  },
  {
    id: 'sortAttrs',
    name: 'Sort attrs',
    enabledByDefault: true,
  },
  {
    id: 'sortDefsChildren',
    name: 'Sort children of <defs>',
    enabledByDefault: true,
  },
  {
    id: 'removeTitle',
    name: 'Remove <title>',
    enabledByDefault: true,
  },
  {
    id: 'removeDesc',
    name: 'Remove <desc>',
    enabledByDefault: true,
  },
  {
    id: 'removeDimensions',
    name: 'Prefer viewBox to width/height',
    enabledByDefault: false,
  },
  {
    id: 'removeStyleElement',
    name: 'Remove style elements',
    enabledByDefault: false,
  },
  {
    id: 'removeScriptElement',
    name: 'Remove script elements',
    enabledByDefault: false,
  },
  {
    id: 'removeOffCanvasPaths',
    name: 'Remove out-of-bounds paths',
    enabledByDefault: false,
  },
];
