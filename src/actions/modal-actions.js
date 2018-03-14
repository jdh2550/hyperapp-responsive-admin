export const modalActions = {
  open: (active) => () => ({active, message: null}),
  close: () => () => ({active:null, message: null}),
  setMessage: (message) => () => ({message}),
}
