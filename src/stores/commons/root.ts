interface IState {
	currentRoute: any;
}

const state: IState = {
	currentRoute: null
};

const mutations = {
	setCurrentRoute(currentState: IState, route: any) {
		currentState.currentRoute = route;
	}
};

export const VuexStoreDefinition = {
	state,
	mutations
};

type SetCurrentRouteMutation = (route: any) => void;

export type {
	IState,
	SetCurrentRouteMutation
};
