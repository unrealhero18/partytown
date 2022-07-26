import { InstanceStateKey, webWorkerRefIdsByRef, webWorkerRefsByRefId } from './worker-constants';
import { randomId } from '../utils';
import type { RefHandler, RefId, WorkerInstance } from '../types';

export const hasInstanceStateValue = (instance: WorkerInstance, stateKey: string | number) =>
  stateKey in instance[InstanceStateKey];

export const getInstanceStateValue = <T = any>(
  instance: WorkerInstance,
  stateKey: string | number
): T => instance[InstanceStateKey][stateKey];

export const setInstanceStateValue = (
  instance: WorkerInstance,
  stateKey: string | number,
  stateValue: any
) => (instance[InstanceStateKey][stateKey] = stateValue);

export const setWorkerRef = (ref: RefHandler, refId?: RefId) => {
  if (!(refId = webWorkerRefIdsByRef.get(ref))) {
    webWorkerRefIdsByRef.set(ref, (refId = randomId()));
    webWorkerRefsByRefId[refId] = ref;
  }
  return refId;
};
