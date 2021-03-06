export const setSelectedTool = tool => ({
  type: 'SET_SELECTED_TOOL',
  tool
});

export const setForeColor = foreColor => ({
  type: 'SET_FORE_COLOR',
  foreColor
});

export const setBackColor = backColor => ({
  type: 'SET_BACK_COLOR',
  backColor
})

export const setPencilWidth = width => ({
  type: 'SET_PENCIL_WIDTH',
  width
})

export const setEraserWidth = width => ({
  type: 'SET_ERASER_WIDTH',
  width
})

export const unknownToolWidth = width => ({
  type: 'ERROR_UNKNOWN_WIDTH',
  width
})

export const Tools = {
  PENCIL   : 'pencil',
  ERASER   : 'eraser',
  PICKER   : 'picker',
  SELECTOR : 'selector',
  FILL     : 'fill',
  ZOOM     : 'zoom',
};

export const Colors = {
  BLACK: '#000',
  WHITE: '#fff'
};