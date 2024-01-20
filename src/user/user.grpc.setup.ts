import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { app } from '@share/protobuf';

export const ModelProtoFiles = ['app/payment/base/user/v1/user.proto'];

/** */
export const generalConfig = (
  serviceName: string,
  protoPathFiles: string[],
): ClientProviderOptions => {
  return {
    name: serviceName,
    transport: Transport.GRPC,
    options: {
      url: `${process.env.INVOICE_HOST || '0.0.0.0'}:${
        process.env.INVOICE_PORT || 50051
      }`,
      package: ['app.payment.user.service.v1'],
      protoPath: [...ModelProtoFiles, ...protoPathFiles],
      loader: {
        includeDirs: ['./node_modules/@share/protobuf'],
        defaults: true,
      },
    },
  };
};

export const clientsModuleOptions: Array<ClientProviderOptions> = [
  generalConfig(app.payment.user.service.v1.USER_SERVICE_NAME, [
    'app/payment/user/service/v1/user.proto',
  ]),
];
