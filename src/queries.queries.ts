/** Types generated for queries found in "src/queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetChannels' parameters type */
export type IGetChannelsParams = void;

/** 'GetChannels' return type */
export interface IGetChannelsResult {
  name: string;
}

/** 'GetChannels' query type */
export interface IGetChannelsQuery {
  params: IGetChannelsParams;
  result: IGetChannelsResult;
}

const getChannelsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT name FROM channels"};

/**
 * Query generated from SQL:
 * ```
 * SELECT name FROM channels
 * ```
 */
export const getChannels = new PreparedQuery<IGetChannelsParams,IGetChannelsResult>(getChannelsIR);


/** 'GetChannel' parameters type */
export interface IGetChannelParams {
  name?: string | null | void;
}

/** 'GetChannel' return type */
export interface IGetChannelResult {
  name: string;
}

/** 'GetChannel' query type */
export interface IGetChannelQuery {
  params: IGetChannelParams;
  result: IGetChannelResult;
}

const getChannelIR: any = {"usedParamSet":{"name":true},"params":[{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":39,"b":43}]}],"statement":"SELECT name FROM channels WHERE name = :name"};

/**
 * Query generated from SQL:
 * ```
 * SELECT name FROM channels WHERE name = :name
 * ```
 */
export const getChannel = new PreparedQuery<IGetChannelParams,IGetChannelResult>(getChannelIR);


/** 'GetChannelImages' parameters type */
export interface IGetChannelImagesParams {
  channelName?: string | null | void;
}

/** 'GetChannelImages' return type */
export interface IGetChannelImagesResult {
  channel_id: string;
  image_url: string;
  message_id: string;
  prompt: string;
}

/** 'GetChannelImages' query type */
export interface IGetChannelImagesQuery {
  params: IGetChannelImagesParams;
  result: IGetChannelImagesResult;
}

const getChannelImagesIR: any = {"usedParamSet":{"channelName":true},"params":[{"name":"channelName","required":false,"transform":{"type":"scalar"},"locs":[{"a":113,"b":124}]}],"statement":"SELECT images.* FROM images INNER JOIN channels ON images.channel_id = channels.channel_id WHERE channels.name = :channelName"};

/**
 * Query generated from SQL:
 * ```
 * SELECT images.* FROM images INNER JOIN channels ON images.channel_id = channels.channel_id WHERE channels.name = :channelName
 * ```
 */
export const getChannelImages = new PreparedQuery<IGetChannelImagesParams,IGetChannelImagesResult>(getChannelImagesIR);


/** 'UpsertImage' parameters type */
export interface IUpsertImageParams {
  channelId?: string | null | void;
  imageUrl?: string | null | void;
  messageId?: string | null | void;
  prompt?: string | null | void;
}

/** 'UpsertImage' return type */
export type IUpsertImageResult = void;

/** 'UpsertImage' query type */
export interface IUpsertImageQuery {
  params: IUpsertImageParams;
  result: IUpsertImageResult;
}

const upsertImageIR: any = {"usedParamSet":{"prompt":true,"channelId":true,"messageId":true,"imageUrl":true},"params":[{"name":"prompt","required":false,"transform":{"type":"scalar"},"locs":[{"a":71,"b":77},{"a":163,"b":169}]},{"name":"channelId","required":false,"transform":{"type":"scalar"},"locs":[{"a":80,"b":89}]},{"name":"messageId","required":false,"transform":{"type":"scalar"},"locs":[{"a":92,"b":101}]},{"name":"imageUrl","required":false,"transform":{"type":"scalar"},"locs":[{"a":104,"b":112},{"a":184,"b":192}]}],"statement":"INSERT INTO images (prompt, channel_id, message_id, image_url) VALUES (:prompt, :channelId, :messageId, :imageUrl) ON CONFLICT (message_id) DO UPDATE SET prompt = :prompt, image_url = :imageUrl"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO images (prompt, channel_id, message_id, image_url) VALUES (:prompt, :channelId, :messageId, :imageUrl) ON CONFLICT (message_id) DO UPDATE SET prompt = :prompt, image_url = :imageUrl
 * ```
 */
export const upsertImage = new PreparedQuery<IUpsertImageParams,IUpsertImageResult>(upsertImageIR);


/** 'UpsertChannel' parameters type */
export interface IUpsertChannelParams {
  channel_id?: string | null | void;
  name?: string | null | void;
}

/** 'UpsertChannel' return type */
export type IUpsertChannelResult = void;

/** 'UpsertChannel' query type */
export interface IUpsertChannelQuery {
  params: IUpsertChannelParams;
  result: IUpsertChannelResult;
}

const upsertChannelIR: any = {"usedParamSet":{"name":true,"channel_id":true},"params":[{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":48,"b":52}]},{"name":"channel_id","required":false,"transform":{"type":"scalar"},"locs":[{"a":55,"b":65},{"a":114,"b":124}]}],"statement":"INSERT INTO channels (name, channel_id) VALUES (:name, :channel_id) ON CONFLICT (name) DO UPDATE SET channel_id = :channel_id"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO channels (name, channel_id) VALUES (:name, :channel_id) ON CONFLICT (name) DO UPDATE SET channel_id = :channel_id
 * ```
 */
export const upsertChannel = new PreparedQuery<IUpsertChannelParams,IUpsertChannelResult>(upsertChannelIR);


