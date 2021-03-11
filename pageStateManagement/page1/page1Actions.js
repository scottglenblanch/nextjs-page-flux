export const UPDATE_SELECTED_DISPLAY_OPTION = 'UPDATE_SELECTED_DISPLAY_OPTION';

export const UPDATE_NAME = 'UPDATE_NAME';

export const updateName = (name) => ({
  type: UPDATE_NAME,
  name
});

export const updateSelectedDisplayOption = (selectedDisplayOption) => ({
  type: UPDATE_SELECTED_DISPLAY_OPTION,
  selectedDisplayOption,
});


