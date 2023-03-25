import {LocalStorageCache} from "../infra/services/LocalStorageCache";

export const makeCache = () => new LocalStorageCache();