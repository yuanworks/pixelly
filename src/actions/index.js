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

export const Tools = {
  PENCIL: 'pencil',
  ERASER: 'eraser',
  PICKER: 'picker',
  SELECTOR: 'selector',
  FILL: 'fill'
};

export const Colors = {
  BLACK: '#000',
  WHITE: '#fff'
};