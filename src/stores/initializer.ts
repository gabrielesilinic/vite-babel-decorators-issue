import { createStore } from 'vuex';

import { RootStore } from '@/stores/commons';

import { InfoStore } from "@/stores/testManagement";

export function getStore() {
	const store = createStore(RootStore.VuexStoreDefinition);
	store.registerModule(InfoStore.namespace, InfoStore.VuexModuleDefinition);
	return store;
}

