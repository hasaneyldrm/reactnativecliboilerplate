import React, { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { offlineActions } from '@/store/offlineSlice';
import OfflineModal from './OfflineModal';

interface OfflineProviderProps {
  children: React.ReactNode;
}

const OfflineProvider: React.FC<OfflineProviderProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isConnected = state.isConnected ?? false;
      const isInternetReachable = state.isInternetReachable ?? true;

      const isOffline = !isConnected || isInternetReachable === false;

      if (isOffline) {
        dispatch(offlineActions.setOffline({ reason: 'network' }));
      } else {
        dispatch(offlineActions.setOnline());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      {children}
      <OfflineModal />
    </>
  );
};

export default OfflineProvider;


