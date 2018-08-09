export const setSelectedTool = tool => ({
  type: 'SET_SELECTED_TOOL',
  tool
});

export const Tools = {
  PENCIL: 'pencil',
  ERASER: 'eraser',
  PICKER: 'picker',
  SELECTOR: 'selector',
  FILL: 'fill'
};