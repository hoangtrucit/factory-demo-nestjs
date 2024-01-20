
## Flowchart Microservices

```mermaid
flowchart LR
    A(Client) -->|Request| B(BFF):::serviceInternal
    subgraph MSA
        B --> |gRPC 1| D(User Service):::serviceInternal
        B --> |gRPC 1| E(Other Service):::serviceInternal
        D --> db[(Database)]
        E --> db[(Database)]
        D --> |gRPC 2| E:::serviceInternal
        E --> |gRPC 3| D:::serviceInternal
    end

    classDef serviceInternal fill:#00882B
```

## Questions
- How to manage interfaces between services?
- How to document API?
- How to support multiple languages?

## BFF
[https://bff-patterns.com/](https://bff-patterns.com/)

## Protobuf
[https://protobuf.dev/](https://protobuf.dev/)


## Configuration

### Setup Protobuf
- Define proto files
- Setup generate NestJS gRPC

### Implement User Service
- Setup Microservice gRPC Server

### Implement BFF
- Implement gRPC client


## Repositories
[BFF](https://github.com/hoangtrucit/factory-demo-nestjs) checkout branch `grpc`

[User Service](https://github.com/hoangtrucit/factory-user-service)

[Protobuf](https://github.com/hoangtrucit/factory-share)