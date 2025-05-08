import Adapter from './adapter';
import CraftgateClient from './CraftgateClient';
import CraftgateError from './CraftgateError';
import Model from './model';
import * as Request from './request';
import * as Response from './response';

// Export the main Craftgate object for backward compatibility
const Craftgate = {
  Client: CraftgateClient,
  Model,
  Adapter,
  CraftgateError
};

// Export individual components for better TypeScript integration
export {CraftgateClient, CraftgateError, Model, Adapter, Request, Response};

// Default export for backward compatibility
export default Craftgate;
