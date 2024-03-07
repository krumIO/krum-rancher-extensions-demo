const mockServicesByCluster = [
  {
    "name": "Cluster local",
    "id": "local",
    "services": [
      {
        "id": "default/kubernetes",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/default/kubernetes",
          "self": "https://localhost:8005/v1/services/default/kubernetes",
          "update": "https://localhost:8005/v1/services/default/kubernetes",
          "view": "https://localhost:8005/api/v1/namespaces/default/services/kubernetes"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "creationTimestamp": "2023-12-04T14:01:55Z",
          "fields": [
            "kubernetes",
            "ClusterIP",
            "10.43.0.1",
            "<none>",
            "443/TCP",
            "88d",
            "<none>"
          ],
          "labels": {
            "component": "apiserver",
            "provider": "kubernetes"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:labels": {
                    ".": {},
                    "f:component": {},
                    "f:provider": {}
                  }
                },
                "f:spec": {
                  "f:clusterIP": {},
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "k3s",
              "operation": "Update",
              "time": "2023-12-04T14:01:55Z"
            }
          ],
          "name": "kubernetes",
          "namespace": "default",
          "relationships": null,
          "resourceVersion": "206",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "ebfef4e5-c0b6-4a3c-915b-bc4edc33b5e5"
        },
        "spec": {
          "clusterIP": "10.43.0.1",
          "clusterIPs": [
            "10.43.0.1"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": 6443
            }
          ],
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "kube-system/kube-dns",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/kube-system/kube-dns",
          "self": "https://localhost:8005/v1/services/kube-system/kube-dns",
          "update": "https://localhost:8005/v1/services/kube-system/kube-dns",
          "view": "https://localhost:8005/api/v1/namespaces/kube-system/services/kube-dns"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "objectset.rio.cattle.io/applied": "H4sIAAAAAAAA/4ySQYvbMBCF/0p5Z9m142TjFfRQdimUQgmk7aXsQZYnG9W2JKRJSgj+70WJl00b0vZm8958vHmjI5Q33yhE4ywk9iUEOmNbSKwp7I0mCAzEqlWsII9Q1jpWbJyN6dc1P0hzJM6DcblWzD3lxr01iQBxU3c/LYXsed9BoqvihbIvxZtPxrbv3rets/9EWDUQJLQL1Nr4X/bolU4z3a6hLB4i0wABH9xAvKVdTG7vAkPivlxUV1rUQfkE4LAjjAK9aqg/1dHVMVPev8DPidJnsMR0mtb9LjKFLE71Tpg/bdNeDy7Q4+f1X/baqriFRKNpVlez+7ouy+W8UkVV36lmURab2eZuSZvlfDYv9GKZ8k7si4i3ahkFoiedVptyf1xBoizyeZUXeVlAvAoR8vul9CRg/Ac1mP6wcr3Rh/SojH3uac1Kd6lXFzhNHV8indOcy19Up+LZaddD4uvjCqO4dGas/S33l4ff3ANxMPqVne567X8SiNSTZhduHHMcx18BAAD//5X9LCMyAwAA",
            "objectset.rio.cattle.io/id": "",
            "objectset.rio.cattle.io/owner-gvk": "k3s.cattle.io/v1, Kind=Addon",
            "objectset.rio.cattle.io/owner-name": "coredns",
            "objectset.rio.cattle.io/owner-namespace": "kube-system",
            "prometheus.io/port": "9153",
            "prometheus.io/scrape": "true"
          },
          "creationTimestamp": "2023-12-04T14:01:58Z",
          "fields": [
            "kube-dns",
            "ClusterIP",
            "10.43.0.10",
            "<none>",
            "53/UDP,53/TCP,9153/TCP",
            "88d",
            "k8s-app=kube-dns"
          ],
          "labels": {
            "k8s-app": "kube-dns",
            "kubernetes.io/cluster-service": "true",
            "kubernetes.io/name": "CoreDNS",
            "objectset.rio.cattle.io/hash": "bce283298811743a0386ab510f2f67ef74240c57"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:objectset.rio.cattle.io/applied": {},
                    "f:objectset.rio.cattle.io/id": {},
                    "f:objectset.rio.cattle.io/owner-gvk": {},
                    "f:objectset.rio.cattle.io/owner-name": {},
                    "f:objectset.rio.cattle.io/owner-namespace": {},
                    "f:prometheus.io/port": {},
                    "f:prometheus.io/scrape": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:k8s-app": {},
                    "f:kubernetes.io/cluster-service": {},
                    "f:kubernetes.io/name": {},
                    "f:objectset.rio.cattle.io/hash": {}
                  }
                },
                "f:spec": {
                  "f:clusterIP": {},
                  "f:clusterIPs": {},
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":53,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":53,\"protocol\":\"UDP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":9153,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "deploy@lima-rancher-desktop",
              "operation": "Update",
              "time": "2023-12-04T14:01:58Z"
            }
          ],
          "name": "kube-dns",
          "namespace": "kube-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "kube-system",
              "rel": "selects",
              "selector": "k8s-app=kube-dns"
            },
            {
              "fromId": "kube-system/coredns",
              "fromType": "k3s.cattle.io.addon",
              "rel": "applies",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "toId": "kube-system/kube-dns-l852w",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "261",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "4334a1d4-0467-4123-8d54-93ad30217b3c"
        },
        "spec": {
          "clusterIP": "10.43.0.10",
          "clusterIPs": [
            "10.43.0.10"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "dns",
              "port": 53,
              "protocol": "UDP",
              "targetPort": 53
            },
            {
              "name": "dns-tcp",
              "port": 53,
              "protocol": "TCP",
              "targetPort": 53
            },
            {
              "name": "metrics",
              "port": 9153,
              "protocol": "TCP",
              "targetPort": 9153
            }
          ],
          "selector": {
            "k8s-app": "kube-dns"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "kube-system/metrics-server",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/kube-system/metrics-server",
          "self": "https://localhost:8005/v1/services/kube-system/metrics-server",
          "update": "https://localhost:8005/v1/services/kube-system/metrics-server",
          "view": "https://localhost:8005/api/v1/namespaces/kube-system/services/metrics-server"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "objectset.rio.cattle.io/applied": "H4sIAAAAAAAA/4SQQWsbMRCF/0p5Z9nNep04FfRQWnopBUNKL6WHWe04VleWhGa8xZj970UbFxLaJCchvZn3vqczKPvvXMSnCIuxgcHgYw+LOy6jdwyDAyv1pAR7BsWYlNSnKPWaul/sVFiXxaelI9XAS5/e+uoA86yefkcui/txgMXQyiNlbMybLz727z/0fYqvWkQ6MGxFLN7JQriMXObjgf31bcnkqsVw7HghJ1E+YDII1HGYO1ahRFaWuujCUfRRhIWWY016Onbh+vqE6wWePckeFnTdt527uWrc7abhZtXuqF11q83uev2uu2HabK46t1tTJfxvdTy8P1NKMrtayefPdPDhtE3BuxMstoV3XD4dKdwpuQEGORUV2B/nvzl71SwXAXa9bg1ySZpcCrD49nELA6Vyz7qdJy4L008D4cBOU5l/81YWlPO/4NM0/QkAAP//sKxN444CAAA",
            "objectset.rio.cattle.io/id": "",
            "objectset.rio.cattle.io/owner-gvk": "k3s.cattle.io/v1, Kind=Addon",
            "objectset.rio.cattle.io/owner-name": "metrics-server-service",
            "objectset.rio.cattle.io/owner-namespace": "kube-system"
          },
          "creationTimestamp": "2023-12-04T14:01:59Z",
          "fields": [
            "metrics-server",
            "ClusterIP",
            "10.43.57.52",
            "<none>",
            "443/TCP",
            "88d",
            "k8s-app=metrics-server"
          ],
          "labels": {
            "kubernetes.io/cluster-service": "true",
            "kubernetes.io/name": "Metrics-server",
            "objectset.rio.cattle.io/hash": "a5d3bc601c871e123fa32b27f549b6ea770bcf4a"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:objectset.rio.cattle.io/applied": {},
                    "f:objectset.rio.cattle.io/id": {},
                    "f:objectset.rio.cattle.io/owner-gvk": {},
                    "f:objectset.rio.cattle.io/owner-name": {},
                    "f:objectset.rio.cattle.io/owner-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:kubernetes.io/cluster-service": {},
                    "f:kubernetes.io/name": {},
                    "f:objectset.rio.cattle.io/hash": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "deploy@lima-rancher-desktop",
              "operation": "Update",
              "time": "2023-12-04T14:01:59Z"
            }
          ],
          "name": "metrics-server",
          "namespace": "kube-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "kube-system",
              "rel": "selects",
              "selector": "k8s-app=metrics-server"
            },
            {
              "fromId": "kube-system/metrics-server-service",
              "fromType": "k3s.cattle.io.addon",
              "rel": "applies",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "toId": "kube-system/metrics-server-d5mmh",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "306",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "a7e062a9-3ed1-44b9-ba3f-9ed73fdb3bae"
        },
        "spec": {
          "clusterIP": "10.43.57.52",
          "clusterIPs": [
            "10.43.57.52"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "PreferDualStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": "https"
            }
          ],
          "selector": {
            "k8s-app": "metrics-server"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cert-manager/cert-manager-webhook",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cert-manager/cert-manager-webhook",
          "self": "https://localhost:8005/v1/services/cert-manager/cert-manager-webhook",
          "update": "https://localhost:8005/v1/services/cert-manager/cert-manager-webhook",
          "view": "https://localhost:8005/api/v1/namespaces/cert-manager/services/cert-manager-webhook"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "cert-manager",
            "meta.helm.sh/release-namespace": "cert-manager"
          },
          "creationTimestamp": "2024-02-29T19:06:53Z",
          "fields": [
            "cert-manager-webhook",
            "ClusterIP",
            "10.43.105.26",
            "<none>",
            "443/TCP",
            "19h",
            "app.kubernetes.io/component=webhook,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=webhook"
          ],
          "labels": {
            "app": "webhook",
            "app.kubernetes.io/component": "webhook",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "webhook",
            "app.kubernetes.io/version": "v1.7.1",
            "helm.sh/chart": "cert-manager-v1.7.1"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app": {},
                    "f:app.kubernetes.io/component": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:app.kubernetes.io/version": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:06:53Z"
            }
          ],
          "name": "cert-manager-webhook",
          "namespace": "cert-manager",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cert-manager",
              "rel": "selects",
              "selector": "app.kubernetes.io/component=webhook,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=webhook"
            },
            {
              "fromId": "cert-manager/cert-manager",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "cert-manager/cert-manager-webhook-v7jdt",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "104995",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "725362ee-46f6-4ee8-915f-fdeb3e3d273b"
        },
        "spec": {
          "clusterIP": "10.43.105.26",
          "clusterIPs": [
            "10.43.105.26"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": "https"
            }
          ],
          "selector": {
            "app.kubernetes.io/component": "webhook",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/name": "webhook"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cert-manager/cert-manager",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cert-manager/cert-manager",
          "self": "https://localhost:8005/v1/services/cert-manager/cert-manager",
          "update": "https://localhost:8005/v1/services/cert-manager/cert-manager",
          "view": "https://localhost:8005/api/v1/namespaces/cert-manager/services/cert-manager"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "cert-manager",
            "meta.helm.sh/release-namespace": "cert-manager"
          },
          "creationTimestamp": "2024-02-29T19:06:53Z",
          "fields": [
            "cert-manager",
            "ClusterIP",
            "10.43.107.23",
            "<none>",
            "9402/TCP",
            "19h",
            "app.kubernetes.io/component=controller,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=cert-manager"
          ],
          "labels": {
            "app": "cert-manager",
            "app.kubernetes.io/component": "controller",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "cert-manager",
            "app.kubernetes.io/version": "v1.7.1",
            "helm.sh/chart": "cert-manager-v1.7.1"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app": {},
                    "f:app.kubernetes.io/component": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:app.kubernetes.io/version": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":9402,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:06:53Z"
            }
          ],
          "name": "cert-manager",
          "namespace": "cert-manager",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cert-manager",
              "rel": "selects",
              "selector": "app.kubernetes.io/component=controller,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=cert-manager"
            },
            {
              "fromId": "cert-manager/cert-manager",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "cert-manager/cert-manager-z4bkr",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "105000",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "27c1365d-ecf2-40ce-9229-9e8fa1e96388"
        },
        "spec": {
          "clusterIP": "10.43.107.23",
          "clusterIPs": [
            "10.43.107.23"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "tcp-prometheus-servicemonitor",
              "port": 9402,
              "protocol": "TCP",
              "targetPort": 9402
            }
          ],
          "selector": {
            "app.kubernetes.io/component": "controller",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/name": "cert-manager"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-system/rancher",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-system/rancher",
          "self": "https://localhost:8005/v1/services/cattle-system/rancher",
          "update": "https://localhost:8005/v1/services/cattle-system/rancher",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-system/services/rancher"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "rancher",
            "meta.helm.sh/release-namespace": "cattle-system"
          },
          "creationTimestamp": "2024-02-29T19:09:49Z",
          "fields": [
            "rancher",
            "ClusterIP",
            "10.43.33.226",
            "<none>",
            "80/TCP,443/TCP",
            "19h",
            "app=rancher"
          ],
          "labels": {
            "app": "rancher",
            "app.kubernetes.io/managed-by": "Helm",
            "chart": "rancher-2.8.2",
            "heritage": "Helm",
            "release": "rancher"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:chart": {},
                    "f:heritage": {},
                    "f:release": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:09:49Z"
            }
          ],
          "name": "rancher",
          "namespace": "cattle-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-system",
              "rel": "selects",
              "selector": "app=rancher"
            },
            {
              "fromId": "cattle-system/rancher",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "cattle-system/rancher-5xslm",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "105219",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "2e4b7e63-3e50-4dcd-b9aa-be2558289682"
        },
        "spec": {
          "clusterIP": "10.43.33.226",
          "clusterIPs": [
            "10.43.33.226"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "http",
              "port": 80,
              "protocol": "TCP",
              "targetPort": 80
            },
            {
              "name": "https-internal",
              "port": 443,
              "protocol": "TCP",
              "targetPort": 444
            }
          ],
          "selector": {
            "app": "rancher"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "kube-system/traefik",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/kube-system/traefik",
          "self": "https://localhost:8005/v1/services/kube-system/traefik",
          "update": "https://localhost:8005/v1/services/kube-system/traefik",
          "view": "https://localhost:8005/api/v1/namespaces/kube-system/services/traefik"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "field.cattle.io/publicEndpoints": "[{\"addresses\":[\"192.168.64.2\"],\"port\":80,\"protocol\":\"TCP\",\"serviceName\":\"kube-system:traefik\",\"allNodes\":false},{\"addresses\":[\"192.168.64.2\"],\"port\":443,\"protocol\":\"TCP\",\"serviceName\":\"kube-system:traefik\",\"allNodes\":false}]",
            "meta.helm.sh/release-name": "traefik",
            "meta.helm.sh/release-namespace": "kube-system"
          },
          "creationTimestamp": "2023-12-04T14:02:12Z",
          "fields": [
            "traefik",
            "LoadBalancer",
            "10.43.78.241",
            "192.168.64.2",
            "80:30377/TCP,443:31349/TCP",
            "88d",
            "app.kubernetes.io/instance=traefik-kube-system,app.kubernetes.io/name=traefik"
          ],
          "finalizers": [
            "service.kubernetes.io/load-balancer-cleanup"
          ],
          "labels": {
            "app.kubernetes.io/instance": "traefik-kube-system",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "traefik",
            "helm.sh/chart": "traefik-25.0.2_up25.0.0"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:allocateLoadBalancerNodePorts": {},
                  "f:externalTrafficPolicy": {},
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2023-12-04T14:02:12Z"
            },
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:finalizers": {
                    ".": {},
                    "v:\"service.kubernetes.io/load-balancer-cleanup\"": {}
                  }
                },
                "f:status": {
                  "f:loadBalancer": {
                    "f:ingress": {}
                  }
                }
              },
              "manager": "k3s",
              "operation": "Update",
              "subresource": "status",
              "time": "2024-02-29T18:59:18Z"
            },
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    "f:field.cattle.io/publicEndpoints": {}
                  }
                }
              },
              "manager": "rancher",
              "operation": "Update",
              "time": "2024-02-29T19:11:29Z"
            }
          ],
          "name": "traefik",
          "namespace": "kube-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "kube-system",
              "rel": "selects",
              "selector": "app.kubernetes.io/instance=traefik-kube-system,app.kubernetes.io/name=traefik"
            },
            {
              "fromId": "kube-system/traefik",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "kube-system/traefik-gqmb5",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "106295",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "fde345c6-314f-4cbf-a6a0-57b4d6f4f372"
        },
        "spec": {
          "allocateLoadBalancerNodePorts": true,
          "clusterIP": "10.43.78.241",
          "clusterIPs": [
            "10.43.78.241"
          ],
          "externalTrafficPolicy": "Cluster",
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "PreferDualStack",
          "ports": [
            {
              "name": "web",
              "nodePort": 30377,
              "port": 80,
              "protocol": "TCP",
              "targetPort": "web"
            },
            {
              "name": "websecure",
              "nodePort": 31349,
              "port": 443,
              "protocol": "TCP",
              "targetPort": "websecure"
            }
          ],
          "selector": {
            "app.kubernetes.io/instance": "traefik-kube-system",
            "app.kubernetes.io/name": "traefik"
          },
          "sessionAffinity": "None",
          "type": "LoadBalancer"
        },
        "status": {
          "loadBalancer": {
            "ingress": [
              {
                "ip": "192.168.64.2"
              }
            ]
          }
        }
      },
      {
        "id": "cattle-fleet-system/gitjob",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-fleet-system/gitjob",
          "self": "https://localhost:8005/v1/services/cattle-fleet-system/gitjob",
          "update": "https://localhost:8005/v1/services/cattle-fleet-system/gitjob",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-fleet-system/services/gitjob"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "fleet",
            "meta.helm.sh/release-namespace": "cattle-fleet-system"
          },
          "creationTimestamp": "2024-02-29T19:12:29Z",
          "fields": [
            "gitjob",
            "ClusterIP",
            "10.43.123.199",
            "<none>",
            "80/TCP",
            "19h",
            "app=gitjob"
          ],
          "labels": {
            "app.kubernetes.io/managed-by": "Helm"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/managed-by": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:12:29Z"
            }
          ],
          "name": "gitjob",
          "namespace": "cattle-fleet-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-fleet-system",
              "rel": "selects",
              "selector": "app=gitjob"
            },
            {
              "toId": "cattle-fleet-system/gitjob-l4vk7",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "fromId": "cattle-fleet-system/fleet",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "107998",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "f7096736-b901-4dc7-9f38-75ea0a16c9e7"
        },
        "spec": {
          "clusterIP": "10.43.123.199",
          "clusterIPs": [
            "10.43.123.199"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "http-80",
              "port": 80,
              "protocol": "TCP",
              "targetPort": 8080
            }
          ],
          "selector": {
            "app": "gitjob"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-system/rancher-webhook",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-system/rancher-webhook",
          "self": "https://localhost:8005/v1/services/cattle-system/rancher-webhook",
          "update": "https://localhost:8005/v1/services/cattle-system/rancher-webhook",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-system/services/rancher-webhook"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "rancher-webhook",
            "meta.helm.sh/release-namespace": "cattle-system"
          },
          "creationTimestamp": "2024-02-29T19:13:07Z",
          "fields": [
            "rancher-webhook",
            "ClusterIP",
            "10.43.180.196",
            "<none>",
            "443/TCP",
            "19h",
            "app=rancher-webhook"
          ],
          "labels": {
            "app.kubernetes.io/managed-by": "Helm"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/managed-by": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:13:07Z"
            }
          ],
          "name": "rancher-webhook",
          "namespace": "cattle-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-system",
              "rel": "selects",
              "selector": "app=rancher-webhook"
            },
            {
              "toId": "cattle-system/rancher-webhook-v57kp",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "fromId": "cattle-system/rancher-webhook",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "108331",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "6eb69461-17ff-460a-8a26-861f3d06ec17"
        },
        "spec": {
          "clusterIP": "10.43.180.196",
          "clusterIPs": [
            "10.43.180.196"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": 9443
            }
          ],
          "selector": {
            "app": "rancher-webhook"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-provisioning-capi-system/capi-webhook-service",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-provisioning-capi-system/capi-webhook-service",
          "self": "https://localhost:8005/v1/services/cattle-provisioning-capi-system/capi-webhook-service",
          "update": "https://localhost:8005/v1/services/cattle-provisioning-capi-system/capi-webhook-service",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-provisioning-capi-system/services/capi-webhook-service"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "rancher-provisioning-capi",
            "meta.helm.sh/release-namespace": "cattle-provisioning-capi-system",
            "need-a-cert.cattle.io/secret-name": "capi-webhook-service-cert"
          },
          "creationTimestamp": "2024-02-29T19:13:35Z",
          "fields": [
            "capi-webhook-service",
            "ClusterIP",
            "10.43.30.198",
            "<none>",
            "443/TCP",
            "19h",
            "cluster.x-k8s.io/provider=cluster-api"
          ],
          "labels": {
            "app.kubernetes.io/managed-by": "Helm",
            "cluster.x-k8s.io/provider": "cluster-api"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {},
                    "f:need-a-cert.cattle.io/secret-name": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:cluster.x-k8s.io/provider": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:13:35Z"
            }
          ],
          "name": "capi-webhook-service",
          "namespace": "cattle-provisioning-capi-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-provisioning-capi-system",
              "rel": "selects",
              "selector": "cluster.x-k8s.io/provider=cluster-api"
            },
            {
              "toId": "cattle-provisioning-capi-system/capi-webhook-service-4k84v",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "toId": "cattle-provisioning-capi-system/capi-webhook-service-cert",
              "toType": "secret",
              "rel": "owner",
              "state": "active",
              "message": "Resource is always ready"
            },
            {
              "fromId": "cattle-provisioning-capi-system/rancher-provisioning-capi",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "108577",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "92482304-47c7-408f-95db-58b51d2c6e7a"
        },
        "spec": {
          "clusterIP": "10.43.30.198",
          "clusterIPs": [
            "10.43.30.198"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "port": 443,
              "protocol": "TCP",
              "targetPort": "webhook-server"
            }
          ],
          "selector": {
            "cluster.x-k8s.io/provider": "cluster-api"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-ui-plugin-system/ui-plugin-operator",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-ui-plugin-system/ui-plugin-operator",
          "self": "https://localhost:8005/v1/services/cattle-ui-plugin-system/ui-plugin-operator",
          "update": "https://localhost:8005/v1/services/cattle-ui-plugin-system/ui-plugin-operator",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-ui-plugin-system/services/ui-plugin-operator"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "ui-plugin-operator",
            "meta.helm.sh/release-namespace": "cattle-ui-plugin-system"
          },
          "creationTimestamp": "2024-02-29T19:20:52Z",
          "fields": [
            "ui-plugin-operator",
            "ClusterIP",
            "10.43.74.118",
            "<none>",
            "80/TCP",
            "19h",
            "app.kubernetes.io/instance=ui-plugin-operator,app.kubernetes.io/name=ui-plugin-operator"
          ],
          "labels": {
            "app.kubernetes.io/instance": "ui-plugin-operator",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "ui-plugin-operator",
            "app.kubernetes.io/version": "0.1.1",
            "helm.sh/chart": "ui-plugin-operator-103.0.1_up0.2.1"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:app.kubernetes.io/version": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:20:52Z"
            }
          ],
          "name": "ui-plugin-operator",
          "namespace": "cattle-ui-plugin-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-ui-plugin-system",
              "rel": "selects",
              "selector": "app.kubernetes.io/instance=ui-plugin-operator,app.kubernetes.io/name=ui-plugin-operator"
            },
            {
              "toId": "cattle-ui-plugin-system/ui-plugin-operator-46s84",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "fromId": "cattle-ui-plugin-system/ui-plugin-operator",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "110871",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "3c9b74a1-d35c-4f00-867e-412d36c3c131"
        },
        "spec": {
          "clusterIP": "10.43.74.118",
          "clusterIPs": [
            "10.43.74.118"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "http",
              "port": 80,
              "protocol": "TCP",
              "targetPort": 8080
            }
          ],
          "selector": {
            "app.kubernetes.io/instance": "ui-plugin-operator",
            "app.kubernetes.io/name": "ui-plugin-operator"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      }
    ]
  },
  {
    "name": "Cluster From Server",
    "id": "server",
    "services": [
      {
        "id": "default/kubernetes",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/default/kubernetes",
          "self": "https://localhost:8005/v1/services/default/kubernetes",
          "update": "https://localhost:8005/v1/services/default/kubernetes",
          "view": "https://localhost:8005/api/v1/namespaces/default/services/kubernetes"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "creationTimestamp": "2023-12-04T14:01:55Z",
          "fields": [
            "kubernetes",
            "ClusterIP",
            "10.43.0.1",
            "<none>",
            "443/TCP",
            "88d",
            "<none>"
          ],
          "labels": {
            "component": "apiserver",
            "provider": "kubernetes"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:labels": {
                    ".": {},
                    "f:component": {},
                    "f:provider": {}
                  }
                },
                "f:spec": {
                  "f:clusterIP": {},
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "k3s",
              "operation": "Update",
              "time": "2023-12-04T14:01:55Z"
            }
          ],
          "name": "kubernetes",
          "namespace": "default",
          "relationships": null,
          "resourceVersion": "206",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "ebfef4e5-c0b6-4a3c-915b-bc4edc33b5e5"
        },
        "spec": {
          "clusterIP": "10.43.0.1",
          "clusterIPs": [
            "10.43.0.1"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": 6443
            }
          ],
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "kube-system/kube-dns",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/kube-system/kube-dns",
          "self": "https://localhost:8005/v1/services/kube-system/kube-dns",
          "update": "https://localhost:8005/v1/services/kube-system/kube-dns",
          "view": "https://localhost:8005/api/v1/namespaces/kube-system/services/kube-dns"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "objectset.rio.cattle.io/applied": "H4sIAAAAAAAA/4ySQYvbMBCF/0p5Z9m142TjFfRQdimUQgmk7aXsQZYnG9W2JKRJSgj+70WJl00b0vZm8958vHmjI5Q33yhE4ywk9iUEOmNbSKwp7I0mCAzEqlWsII9Q1jpWbJyN6dc1P0hzJM6DcblWzD3lxr01iQBxU3c/LYXsed9BoqvihbIvxZtPxrbv3rets/9EWDUQJLQL1Nr4X/bolU4z3a6hLB4i0wABH9xAvKVdTG7vAkPivlxUV1rUQfkE4LAjjAK9aqg/1dHVMVPev8DPidJnsMR0mtb9LjKFLE71Tpg/bdNeDy7Q4+f1X/baqriFRKNpVlez+7ouy+W8UkVV36lmURab2eZuSZvlfDYv9GKZ8k7si4i3ahkFoiedVptyf1xBoizyeZUXeVlAvAoR8vul9CRg/Ac1mP6wcr3Rh/SojH3uac1Kd6lXFzhNHV8indOcy19Up+LZaddD4uvjCqO4dGas/S33l4ff3ANxMPqVne567X8SiNSTZhduHHMcx18BAAD//5X9LCMyAwAA",
            "objectset.rio.cattle.io/id": "",
            "objectset.rio.cattle.io/owner-gvk": "k3s.cattle.io/v1, Kind=Addon",
            "objectset.rio.cattle.io/owner-name": "coredns",
            "objectset.rio.cattle.io/owner-namespace": "kube-system",
            "prometheus.io/port": "9153",
            "prometheus.io/scrape": "true"
          },
          "creationTimestamp": "2023-12-04T14:01:58Z",
          "fields": [
            "kube-dns",
            "ClusterIP",
            "10.43.0.10",
            "<none>",
            "53/UDP,53/TCP,9153/TCP",
            "88d",
            "k8s-app=kube-dns"
          ],
          "labels": {
            "k8s-app": "kube-dns",
            "kubernetes.io/cluster-service": "true",
            "kubernetes.io/name": "CoreDNS",
            "objectset.rio.cattle.io/hash": "bce283298811743a0386ab510f2f67ef74240c57"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:objectset.rio.cattle.io/applied": {},
                    "f:objectset.rio.cattle.io/id": {},
                    "f:objectset.rio.cattle.io/owner-gvk": {},
                    "f:objectset.rio.cattle.io/owner-name": {},
                    "f:objectset.rio.cattle.io/owner-namespace": {},
                    "f:prometheus.io/port": {},
                    "f:prometheus.io/scrape": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:k8s-app": {},
                    "f:kubernetes.io/cluster-service": {},
                    "f:kubernetes.io/name": {},
                    "f:objectset.rio.cattle.io/hash": {}
                  }
                },
                "f:spec": {
                  "f:clusterIP": {},
                  "f:clusterIPs": {},
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":53,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":53,\"protocol\":\"UDP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":9153,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "deploy@lima-rancher-desktop",
              "operation": "Update",
              "time": "2023-12-04T14:01:58Z"
            }
          ],
          "name": "kube-dns",
          "namespace": "kube-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "kube-system",
              "rel": "selects",
              "selector": "k8s-app=kube-dns"
            },
            {
              "fromId": "kube-system/coredns",
              "fromType": "k3s.cattle.io.addon",
              "rel": "applies",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "toId": "kube-system/kube-dns-l852w",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "261",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "4334a1d4-0467-4123-8d54-93ad30217b3c"
        },
        "spec": {
          "clusterIP": "10.43.0.10",
          "clusterIPs": [
            "10.43.0.10"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "dns",
              "port": 53,
              "protocol": "UDP",
              "targetPort": 53
            },
            {
              "name": "dns-tcp",
              "port": 53,
              "protocol": "TCP",
              "targetPort": 53
            },
            {
              "name": "metrics",
              "port": 9153,
              "protocol": "TCP",
              "targetPort": 9153
            }
          ],
          "selector": {
            "k8s-app": "kube-dns"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "kube-system/metrics-server",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/kube-system/metrics-server",
          "self": "https://localhost:8005/v1/services/kube-system/metrics-server",
          "update": "https://localhost:8005/v1/services/kube-system/metrics-server",
          "view": "https://localhost:8005/api/v1/namespaces/kube-system/services/metrics-server"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "objectset.rio.cattle.io/applied": "H4sIAAAAAAAA/4SQQWsbMRCF/0p5Z9nNep04FfRQWnopBUNKL6WHWe04VleWhGa8xZj970UbFxLaJCchvZn3vqczKPvvXMSnCIuxgcHgYw+LOy6jdwyDAyv1pAR7BsWYlNSnKPWaul/sVFiXxaelI9XAS5/e+uoA86yefkcui/txgMXQyiNlbMybLz727z/0fYqvWkQ6MGxFLN7JQriMXObjgf31bcnkqsVw7HghJ1E+YDII1HGYO1ahRFaWuujCUfRRhIWWY016Onbh+vqE6wWePckeFnTdt527uWrc7abhZtXuqF11q83uev2uu2HabK46t1tTJfxvdTy8P1NKMrtayefPdPDhtE3BuxMstoV3XD4dKdwpuQEGORUV2B/nvzl71SwXAXa9bg1ySZpcCrD49nELA6Vyz7qdJy4L008D4cBOU5l/81YWlPO/4NM0/QkAAP//sKxN444CAAA",
            "objectset.rio.cattle.io/id": "",
            "objectset.rio.cattle.io/owner-gvk": "k3s.cattle.io/v1, Kind=Addon",
            "objectset.rio.cattle.io/owner-name": "metrics-server-service",
            "objectset.rio.cattle.io/owner-namespace": "kube-system"
          },
          "creationTimestamp": "2023-12-04T14:01:59Z",
          "fields": [
            "metrics-server",
            "ClusterIP",
            "10.43.57.52",
            "<none>",
            "443/TCP",
            "88d",
            "k8s-app=metrics-server"
          ],
          "labels": {
            "kubernetes.io/cluster-service": "true",
            "kubernetes.io/name": "Metrics-server",
            "objectset.rio.cattle.io/hash": "a5d3bc601c871e123fa32b27f549b6ea770bcf4a"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:objectset.rio.cattle.io/applied": {},
                    "f:objectset.rio.cattle.io/id": {},
                    "f:objectset.rio.cattle.io/owner-gvk": {},
                    "f:objectset.rio.cattle.io/owner-name": {},
                    "f:objectset.rio.cattle.io/owner-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:kubernetes.io/cluster-service": {},
                    "f:kubernetes.io/name": {},
                    "f:objectset.rio.cattle.io/hash": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "deploy@lima-rancher-desktop",
              "operation": "Update",
              "time": "2023-12-04T14:01:59Z"
            }
          ],
          "name": "metrics-server",
          "namespace": "kube-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "kube-system",
              "rel": "selects",
              "selector": "k8s-app=metrics-server"
            },
            {
              "fromId": "kube-system/metrics-server-service",
              "fromType": "k3s.cattle.io.addon",
              "rel": "applies",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "toId": "kube-system/metrics-server-d5mmh",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "306",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "a7e062a9-3ed1-44b9-ba3f-9ed73fdb3bae"
        },
        "spec": {
          "clusterIP": "10.43.57.52",
          "clusterIPs": [
            "10.43.57.52"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "PreferDualStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": "https"
            }
          ],
          "selector": {
            "k8s-app": "metrics-server"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cert-manager/cert-manager-webhook",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cert-manager/cert-manager-webhook",
          "self": "https://localhost:8005/v1/services/cert-manager/cert-manager-webhook",
          "update": "https://localhost:8005/v1/services/cert-manager/cert-manager-webhook",
          "view": "https://localhost:8005/api/v1/namespaces/cert-manager/services/cert-manager-webhook"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "cert-manager",
            "meta.helm.sh/release-namespace": "cert-manager"
          },
          "creationTimestamp": "2024-02-29T19:06:53Z",
          "fields": [
            "cert-manager-webhook",
            "ClusterIP",
            "10.43.105.26",
            "<none>",
            "443/TCP",
            "19h",
            "app.kubernetes.io/component=webhook,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=webhook"
          ],
          "labels": {
            "app": "webhook",
            "app.kubernetes.io/component": "webhook",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "webhook",
            "app.kubernetes.io/version": "v1.7.1",
            "helm.sh/chart": "cert-manager-v1.7.1"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app": {},
                    "f:app.kubernetes.io/component": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:app.kubernetes.io/version": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:06:53Z"
            }
          ],
          "name": "cert-manager-webhook",
          "namespace": "cert-manager",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cert-manager",
              "rel": "selects",
              "selector": "app.kubernetes.io/component=webhook,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=webhook"
            },
            {
              "fromId": "cert-manager/cert-manager",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "cert-manager/cert-manager-webhook-v7jdt",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "104995",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "725362ee-46f6-4ee8-915f-fdeb3e3d273b"
        },
        "spec": {
          "clusterIP": "10.43.105.26",
          "clusterIPs": [
            "10.43.105.26"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": "https"
            }
          ],
          "selector": {
            "app.kubernetes.io/component": "webhook",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/name": "webhook"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cert-manager/cert-manager",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cert-manager/cert-manager",
          "self": "https://localhost:8005/v1/services/cert-manager/cert-manager",
          "update": "https://localhost:8005/v1/services/cert-manager/cert-manager",
          "view": "https://localhost:8005/api/v1/namespaces/cert-manager/services/cert-manager"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "cert-manager",
            "meta.helm.sh/release-namespace": "cert-manager"
          },
          "creationTimestamp": "2024-02-29T19:06:53Z",
          "fields": [
            "cert-manager",
            "ClusterIP",
            "10.43.107.23",
            "<none>",
            "9402/TCP",
            "19h",
            "app.kubernetes.io/component=controller,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=cert-manager"
          ],
          "labels": {
            "app": "cert-manager",
            "app.kubernetes.io/component": "controller",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "cert-manager",
            "app.kubernetes.io/version": "v1.7.1",
            "helm.sh/chart": "cert-manager-v1.7.1"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app": {},
                    "f:app.kubernetes.io/component": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:app.kubernetes.io/version": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":9402,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:06:53Z"
            }
          ],
          "name": "cert-manager",
          "namespace": "cert-manager",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cert-manager",
              "rel": "selects",
              "selector": "app.kubernetes.io/component=controller,app.kubernetes.io/instance=cert-manager,app.kubernetes.io/name=cert-manager"
            },
            {
              "fromId": "cert-manager/cert-manager",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "cert-manager/cert-manager-z4bkr",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "105000",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "27c1365d-ecf2-40ce-9229-9e8fa1e96388"
        },
        "spec": {
          "clusterIP": "10.43.107.23",
          "clusterIPs": [
            "10.43.107.23"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "tcp-prometheus-servicemonitor",
              "port": 9402,
              "protocol": "TCP",
              "targetPort": 9402
            }
          ],
          "selector": {
            "app.kubernetes.io/component": "controller",
            "app.kubernetes.io/instance": "cert-manager",
            "app.kubernetes.io/name": "cert-manager"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-system/rancher",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-system/rancher",
          "self": "https://localhost:8005/v1/services/cattle-system/rancher",
          "update": "https://localhost:8005/v1/services/cattle-system/rancher",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-system/services/rancher"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "rancher",
            "meta.helm.sh/release-namespace": "cattle-system"
          },
          "creationTimestamp": "2024-02-29T19:09:49Z",
          "fields": [
            "rancher",
            "ClusterIP",
            "10.43.33.226",
            "<none>",
            "80/TCP,443/TCP",
            "19h",
            "app=rancher"
          ],
          "labels": {
            "app": "rancher",
            "app.kubernetes.io/managed-by": "Helm",
            "chart": "rancher-2.8.2",
            "heritage": "Helm",
            "release": "rancher"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:chart": {},
                    "f:heritage": {},
                    "f:release": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:09:49Z"
            }
          ],
          "name": "rancher",
          "namespace": "cattle-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-system",
              "rel": "selects",
              "selector": "app=rancher"
            },
            {
              "fromId": "cattle-system/rancher",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "cattle-system/rancher-5xslm",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "105219",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "2e4b7e63-3e50-4dcd-b9aa-be2558289682"
        },
        "spec": {
          "clusterIP": "10.43.33.226",
          "clusterIPs": [
            "10.43.33.226"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "http",
              "port": 80,
              "protocol": "TCP",
              "targetPort": 80
            },
            {
              "name": "https-internal",
              "port": 443,
              "protocol": "TCP",
              "targetPort": 444
            }
          ],
          "selector": {
            "app": "rancher"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "kube-system/traefik",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/kube-system/traefik",
          "self": "https://localhost:8005/v1/services/kube-system/traefik",
          "update": "https://localhost:8005/v1/services/kube-system/traefik",
          "view": "https://localhost:8005/api/v1/namespaces/kube-system/services/traefik"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "field.cattle.io/publicEndpoints": "[{\"addresses\":[\"192.168.64.2\"],\"port\":80,\"protocol\":\"TCP\",\"serviceName\":\"kube-system:traefik\",\"allNodes\":false},{\"addresses\":[\"192.168.64.2\"],\"port\":443,\"protocol\":\"TCP\",\"serviceName\":\"kube-system:traefik\",\"allNodes\":false}]",
            "meta.helm.sh/release-name": "traefik",
            "meta.helm.sh/release-namespace": "kube-system"
          },
          "creationTimestamp": "2023-12-04T14:02:12Z",
          "fields": [
            "traefik",
            "LoadBalancer",
            "10.43.78.241",
            "192.168.64.2",
            "80:30377/TCP,443:31349/TCP",
            "88d",
            "app.kubernetes.io/instance=traefik-kube-system,app.kubernetes.io/name=traefik"
          ],
          "finalizers": [
            "service.kubernetes.io/load-balancer-cleanup"
          ],
          "labels": {
            "app.kubernetes.io/instance": "traefik-kube-system",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "traefik",
            "helm.sh/chart": "traefik-25.0.2_up25.0.0"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:allocateLoadBalancerNodePorts": {},
                  "f:externalTrafficPolicy": {},
                  "f:internalTrafficPolicy": {},
                  "f:ipFamilyPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    },
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2023-12-04T14:02:12Z"
            },
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:finalizers": {
                    ".": {},
                    "v:\"service.kubernetes.io/load-balancer-cleanup\"": {}
                  }
                },
                "f:status": {
                  "f:loadBalancer": {
                    "f:ingress": {}
                  }
                }
              },
              "manager": "k3s",
              "operation": "Update",
              "subresource": "status",
              "time": "2024-02-29T18:59:18Z"
            },
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    "f:field.cattle.io/publicEndpoints": {}
                  }
                }
              },
              "manager": "rancher",
              "operation": "Update",
              "time": "2024-02-29T19:11:29Z"
            }
          ],
          "name": "traefik",
          "namespace": "kube-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "kube-system",
              "rel": "selects",
              "selector": "app.kubernetes.io/instance=traefik-kube-system,app.kubernetes.io/name=traefik"
            },
            {
              "fromId": "kube-system/traefik",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            },
            {
              "toId": "kube-system/traefik-gqmb5",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            }
          ],
          "resourceVersion": "106295",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "fde345c6-314f-4cbf-a6a0-57b4d6f4f372"
        },
        "spec": {
          "allocateLoadBalancerNodePorts": true,
          "clusterIP": "10.43.78.241",
          "clusterIPs": [
            "10.43.78.241"
          ],
          "externalTrafficPolicy": "Cluster",
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "PreferDualStack",
          "ports": [
            {
              "name": "web",
              "nodePort": 30377,
              "port": 80,
              "protocol": "TCP",
              "targetPort": "web"
            },
            {
              "name": "websecure",
              "nodePort": 31349,
              "port": 443,
              "protocol": "TCP",
              "targetPort": "websecure"
            }
          ],
          "selector": {
            "app.kubernetes.io/instance": "traefik-kube-system",
            "app.kubernetes.io/name": "traefik"
          },
          "sessionAffinity": "None",
          "type": "LoadBalancer"
        },
        "status": {
          "loadBalancer": {
            "ingress": [
              {
                "ip": "192.168.64.2"
              }
            ]
          }
        }
      },
      {
        "id": "cattle-fleet-system/gitjob",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-fleet-system/gitjob",
          "self": "https://localhost:8005/v1/services/cattle-fleet-system/gitjob",
          "update": "https://localhost:8005/v1/services/cattle-fleet-system/gitjob",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-fleet-system/services/gitjob"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "fleet",
            "meta.helm.sh/release-namespace": "cattle-fleet-system"
          },
          "creationTimestamp": "2024-02-29T19:12:29Z",
          "fields": [
            "gitjob",
            "ClusterIP",
            "10.43.123.199",
            "<none>",
            "80/TCP",
            "19h",
            "app=gitjob"
          ],
          "labels": {
            "app.kubernetes.io/managed-by": "Helm"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/managed-by": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:12:29Z"
            }
          ],
          "name": "gitjob",
          "namespace": "cattle-fleet-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-fleet-system",
              "rel": "selects",
              "selector": "app=gitjob"
            },
            {
              "toId": "cattle-fleet-system/gitjob-l4vk7",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "fromId": "cattle-fleet-system/fleet",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "107998",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "f7096736-b901-4dc7-9f38-75ea0a16c9e7"
        },
        "spec": {
          "clusterIP": "10.43.123.199",
          "clusterIPs": [
            "10.43.123.199"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "http-80",
              "port": 80,
              "protocol": "TCP",
              "targetPort": 8080
            }
          ],
          "selector": {
            "app": "gitjob"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-system/rancher-webhook",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-system/rancher-webhook",
          "self": "https://localhost:8005/v1/services/cattle-system/rancher-webhook",
          "update": "https://localhost:8005/v1/services/cattle-system/rancher-webhook",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-system/services/rancher-webhook"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "rancher-webhook",
            "meta.helm.sh/release-namespace": "cattle-system"
          },
          "creationTimestamp": "2024-02-29T19:13:07Z",
          "fields": [
            "rancher-webhook",
            "ClusterIP",
            "10.43.180.196",
            "<none>",
            "443/TCP",
            "19h",
            "app=rancher-webhook"
          ],
          "labels": {
            "app.kubernetes.io/managed-by": "Helm"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/managed-by": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:13:07Z"
            }
          ],
          "name": "rancher-webhook",
          "namespace": "cattle-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-system",
              "rel": "selects",
              "selector": "app=rancher-webhook"
            },
            {
              "toId": "cattle-system/rancher-webhook-v57kp",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "fromId": "cattle-system/rancher-webhook",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "108331",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "6eb69461-17ff-460a-8a26-861f3d06ec17"
        },
        "spec": {
          "clusterIP": "10.43.180.196",
          "clusterIPs": [
            "10.43.180.196"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "https",
              "port": 443,
              "protocol": "TCP",
              "targetPort": 9443
            }
          ],
          "selector": {
            "app": "rancher-webhook"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-provisioning-capi-system/capi-webhook-service",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-provisioning-capi-system/capi-webhook-service",
          "self": "https://localhost:8005/v1/services/cattle-provisioning-capi-system/capi-webhook-service",
          "update": "https://localhost:8005/v1/services/cattle-provisioning-capi-system/capi-webhook-service",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-provisioning-capi-system/services/capi-webhook-service"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "rancher-provisioning-capi",
            "meta.helm.sh/release-namespace": "cattle-provisioning-capi-system",
            "need-a-cert.cattle.io/secret-name": "capi-webhook-service-cert"
          },
          "creationTimestamp": "2024-02-29T19:13:35Z",
          "fields": [
            "capi-webhook-service",
            "ClusterIP",
            "10.43.30.198",
            "<none>",
            "443/TCP",
            "19h",
            "cluster.x-k8s.io/provider=cluster-api"
          ],
          "labels": {
            "app.kubernetes.io/managed-by": "Helm",
            "cluster.x-k8s.io/provider": "cluster-api"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {},
                    "f:need-a-cert.cattle.io/secret-name": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:cluster.x-k8s.io/provider": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":443,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:13:35Z"
            }
          ],
          "name": "capi-webhook-service",
          "namespace": "cattle-provisioning-capi-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-provisioning-capi-system",
              "rel": "selects",
              "selector": "cluster.x-k8s.io/provider=cluster-api"
            },
            {
              "toId": "cattle-provisioning-capi-system/capi-webhook-service-4k84v",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "toId": "cattle-provisioning-capi-system/capi-webhook-service-cert",
              "toType": "secret",
              "rel": "owner",
              "state": "active",
              "message": "Resource is always ready"
            },
            {
              "fromId": "cattle-provisioning-capi-system/rancher-provisioning-capi",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "108577",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "92482304-47c7-408f-95db-58b51d2c6e7a"
        },
        "spec": {
          "clusterIP": "10.43.30.198",
          "clusterIPs": [
            "10.43.30.198"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "port": 443,
              "protocol": "TCP",
              "targetPort": "webhook-server"
            }
          ],
          "selector": {
            "cluster.x-k8s.io/provider": "cluster-api"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      },
      {
        "id": "cattle-ui-plugin-system/ui-plugin-operator",
        "type": "service",
        "links": {
          "remove": "https://localhost:8005/v1/services/cattle-ui-plugin-system/ui-plugin-operator",
          "self": "https://localhost:8005/v1/services/cattle-ui-plugin-system/ui-plugin-operator",
          "update": "https://localhost:8005/v1/services/cattle-ui-plugin-system/ui-plugin-operator",
          "view": "https://localhost:8005/api/v1/namespaces/cattle-ui-plugin-system/services/ui-plugin-operator"
        },
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
          "annotations": {
            "meta.helm.sh/release-name": "ui-plugin-operator",
            "meta.helm.sh/release-namespace": "cattle-ui-plugin-system"
          },
          "creationTimestamp": "2024-02-29T19:20:52Z",
          "fields": [
            "ui-plugin-operator",
            "ClusterIP",
            "10.43.74.118",
            "<none>",
            "80/TCP",
            "19h",
            "app.kubernetes.io/instance=ui-plugin-operator,app.kubernetes.io/name=ui-plugin-operator"
          ],
          "labels": {
            "app.kubernetes.io/instance": "ui-plugin-operator",
            "app.kubernetes.io/managed-by": "Helm",
            "app.kubernetes.io/name": "ui-plugin-operator",
            "app.kubernetes.io/version": "0.1.1",
            "helm.sh/chart": "ui-plugin-operator-103.0.1_up0.2.1"
          },
          "managedFields": [
            {
              "apiVersion": "v1",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:metadata": {
                  "f:annotations": {
                    ".": {},
                    "f:meta.helm.sh/release-name": {},
                    "f:meta.helm.sh/release-namespace": {}
                  },
                  "f:labels": {
                    ".": {},
                    "f:app.kubernetes.io/instance": {},
                    "f:app.kubernetes.io/managed-by": {},
                    "f:app.kubernetes.io/name": {},
                    "f:app.kubernetes.io/version": {},
                    "f:helm.sh/chart": {}
                  }
                },
                "f:spec": {
                  "f:internalTrafficPolicy": {},
                  "f:ports": {
                    ".": {},
                    "k:{\"port\":80,\"protocol\":\"TCP\"}": {
                      ".": {},
                      "f:name": {},
                      "f:port": {},
                      "f:protocol": {},
                      "f:targetPort": {}
                    }
                  },
                  "f:selector": {},
                  "f:sessionAffinity": {},
                  "f:type": {}
                }
              },
              "manager": "helm",
              "operation": "Update",
              "time": "2024-02-29T19:20:52Z"
            }
          ],
          "name": "ui-plugin-operator",
          "namespace": "cattle-ui-plugin-system",
          "relationships": [
            {
              "toType": "pod",
              "toNamespace": "cattle-ui-plugin-system",
              "rel": "selects",
              "selector": "app.kubernetes.io/instance=ui-plugin-operator,app.kubernetes.io/name=ui-plugin-operator"
            },
            {
              "toId": "cattle-ui-plugin-system/ui-plugin-operator-46s84",
              "toType": "discovery.k8s.io.endpointslice",
              "rel": "owner",
              "state": "active",
              "message": "Resource is current"
            },
            {
              "fromId": "cattle-ui-plugin-system/ui-plugin-operator",
              "fromType": "catalog.cattle.io.app",
              "rel": "helmresource",
              "state": "deployed"
            }
          ],
          "resourceVersion": "110871",
          "state": {
            "error": false,
            "message": "Service is ready",
            "name": "active",
            "transitioning": false
          },
          "uid": "3c9b74a1-d35c-4f00-867e-412d36c3c131"
        },
        "spec": {
          "clusterIP": "10.43.74.118",
          "clusterIPs": [
            "10.43.74.118"
          ],
          "internalTrafficPolicy": "Cluster",
          "ipFamilies": [
            "IPv4"
          ],
          "ipFamilyPolicy": "SingleStack",
          "ports": [
            {
              "name": "http",
              "port": 80,
              "protocol": "TCP",
              "targetPort": 8080
            }
          ],
          "selector": {
            "app.kubernetes.io/instance": "ui-plugin-operator",
            "app.kubernetes.io/name": "ui-plugin-operator"
          },
          "sessionAffinity": "None",
          "type": "ClusterIP"
        },
        "status": {
          "loadBalancer": {}
        }
      }
    ]
  }
];

export { mockServicesByCluster };
