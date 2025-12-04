import { store } from './index';
import { offlineActions } from './offlineSlice';

export function setOfflineByNetwork() {
  store.dispatch(offlineActions.setOffline({ reason: 'network' }));
}

export function setOfflineByRequestError() {
  store.dispatch(offlineActions.setOfflineByRequestError());
}

export function clearOfflineStatus() {
  store.dispatch(offlineActions.setOnline());
}


