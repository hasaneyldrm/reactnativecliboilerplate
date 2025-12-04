import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { useI18n } from '@hooks/useI18n';

const OfflineModal: React.FC = () => {
  const { t } = useI18n();
  const offlineState = useSelector((state: RootState) => state.offline);

  if (!offlineState.isOffline) {
    return null;
  }

  const messageKey =
    offlineState.reason === 'request_error'
      ? 'offline.request_error_message'
      : 'offline.network_message';

  return (
    <Modal transparent animationType="fade" visible>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <Text style={styles.title}>{t('offline.title')}</Text>
          <Text style={styles.message}>{t(messageKey)}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default OfflineModal;


