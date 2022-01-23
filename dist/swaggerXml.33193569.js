// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"swaggerXML/swagger.json":[function(require,module,exports) {
module.exports = {
  "openapi": "3.0.1",
  "info": {
    "title": "Personnel Services API",
    "version": "v1"
  },
  "paths": {
    "/ks/api/AbsenceInfo/{id}": {
      "get": {
        "tags": ["AbsenceInfo"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["AbsenceInfo"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AbsenceInfoInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/AbsenceInfoInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/AbsenceInfoInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["AbsenceInfo"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/AbsenceInfo": {
      "get": {
        "tags": ["AbsenceInfo"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["AbsenceInfo"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AbsenceInfoInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/AbsenceInfoInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/AbsenceInfoInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/AbsenceInfoDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Attachments": {
      "post": {
        "tags": ["Attachments"],
        "summary": "Загрузить вложение для любой сущности.",
        "operationId": "UploadAttachment",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary",
                    "nullable": true
                  }
                }
              },
              "encoding": {
                "file": {
                  "style": "form"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/AttachmentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AttachmentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/AttachmentDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Attachments/{attachmentId}": {
      "delete": {
        "tags": ["Attachments"],
        "summary": "Удалить вложение для любой сущности.",
        "operationId": "RemoveAttachment",
        "parameters": [{
          "name": "attachmentId",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/CalendarHolidays/{year}": {
      "get": {
        "tags": ["CalendarHolidays"],
        "summary": "Получение файла производственного календаря в формате xml",
        "operationId": "Get",
        "parameters": [{
          "name": "year",
          "in": "path",
          "description": "Год календаря",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Год календаря",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/CalendarHolidays": {
      "post": {
        "tags": ["CalendarHolidays"],
        "summary": "Загрузка файла производственного календаря в систему",
        "operationId": "Upload",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "description": "Файл в формате xml",
                    "format": "binary",
                    "nullable": true
                  }
                }
              },
              "encoding": {
                "file": {
                  "style": "form"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["CalendarHolidays"],
        "summary": "Запрос с фильтрацией праздничных и выходных дней производственного календаря",
        "operationId": "GetList",
        "parameters": [{
          "name": "Years",
          "in": "query",
          "description": "Список годов",
          "schema": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "description": "Список годов",
            "nullable": true
          }
        }, {
          "name": "Months",
          "in": "query",
          "description": "Список месяцев",
          "schema": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "description": "Список месяцев",
            "nullable": true
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CalendarHolidayDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CalendarHolidayDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CalendarHolidayDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Candidate/{id}": {
      "get": {
        "tags": ["Candidate"],
        "summary": "Получение карточки",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор карточки",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор карточки",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateCardDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Candidate"],
        "summary": "Обновление карточки",
        "operationId": "Update",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор карточки",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор карточки",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Запрос на обновление IT2G.KS.Dto.Candidate.CandidateCardInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateCardInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateCardInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateCardInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Candidate": {
      "post": {
        "tags": ["Candidate"],
        "summary": "Создать карточку",
        "operationId": "Add",
        "requestBody": {
          "description": "Запрос на создание IT2G.KS.Dto.Candidate.CandidateCardInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateCardInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateCardInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateCardInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["Candidate"],
        "summary": "Удалениие карточки",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "query",
          "description": "Идентификатор карточки",
          "schema": {
            "type": "integer",
            "description": "Идентификатор карточки",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Candidate/files/{cardId}": {
      "get": {
        "tags": ["Candidate"],
        "summary": "Получить все файлы кандидата",
        "operationId": "GetFiles",
        "parameters": [{
          "name": "cardId",
          "in": "path",
          "description": "Идентификатор карточки",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор карточки",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserAttachmentDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserAttachmentDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserAttachmentDto"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Candidate/candidates": {
      "get": {
        "tags": ["Candidate"],
        "summary": "Получить всех кандидатов",
        "operationId": "GetCandidatesAsync",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Поиск по имени, отчеству или фамилии кандидата",
          "schema": {
            "type": "string",
            "description": "Поиск по имени, отчеству или фамилии кандидата",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateBaseDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateBaseDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateBaseDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/CandidateStage/{id}": {
      "get": {
        "tags": ["CandidateStage"],
        "summary": "Получение этапа по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор этапа",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор этапа",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateStageDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateStageDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CandidateStageDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["CandidateStage"],
        "summary": "Обновление этапа",
        "operationId": "Update",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Запрос обновления этапа IT2G.KS.Dto.Candidate.CandidateStageInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateStageInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateStageInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateStageInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      },
      "patch": {
        "tags": ["CandidateStage"],
        "summary": "Смена статуса этапа",
        "operationId": "ChangeStatus",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор этапа",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор этапа",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Запрос смены статуса IT2G.KS.Dto.Candidate.StageChangeStatusDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StageChangeStatusDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StageChangeStatusDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StageChangeStatusDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      },
      "delete": {
        "tags": ["CandidateStage"],
        "summary": "Удаление этапа",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор этапа",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор этапа",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/CandidateStage/card/{id}": {
      "get": {
        "tags": ["CandidateStage"],
        "summary": "Получение всех этапов для карточки",
        "operationId": "GetList",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор карточки кандидата",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор карточки кандидата",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CandidateStageDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CandidateStageDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CandidateStageDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/CandidateStage/task/{id}": {
      "get": {
        "tags": ["CandidateStage"],
        "summary": "Получение информации по текущим и планируемым этапам для всех кандидатов",
        "operationId": "GetSummary",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CandidateSummaryStageDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CandidateSummaryStageDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CandidateSummaryStageDto"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/CandidateStage": {
      "post": {
        "tags": ["CandidateStage"],
        "summary": "Создание этапа",
        "operationId": "Add",
        "requestBody": {
          "description": "Запрос создания этапа IT2G.KS.Dto.Candidate.CandidateStageInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateStageInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateStageInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CandidateStageInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Competences/competence": {
      "post": {
        "tags": ["Competences"],
        "summary": "Вставка компетенции",
        "operationId": "AddCompetence",
        "requestBody": {
          "description": "Dto компетенции",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CompetenceInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CompetenceInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CompetenceInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CompetenceDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompetenceDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompetenceDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Competences/group": {
      "post": {
        "tags": ["Competences"],
        "summary": "Вставка группы компетенции",
        "operationId": "AddGroupCompetence",
        "requestBody": {
          "description": "Dto группы компетенций",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GroupCompetencesInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/GroupCompetencesInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/GroupCompetencesInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Competences/{id}/competence": {
      "get": {
        "tags": ["Competences"],
        "summary": "Получение компетенции по идентификатору",
        "operationId": "GetCompetence",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор компетенции",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор компетенции",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CompetenceDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompetenceDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompetenceDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Competences"],
        "summary": "Правка компетенции",
        "operationId": "UpdateCompetence",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор компетенции",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор компетенции",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto компетенции",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CompetenceInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CompetenceInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CompetenceInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["Competences"],
        "summary": "Удаление компетенции",
        "operationId": "DeleteCompetence",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой компетенции",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой компетенции",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Competences/{id}/groupCompetences": {
      "get": {
        "tags": ["Competences"],
        "summary": "Получение группы компетенций по идентификатору",
        "operationId": "GetGroupCompetence",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор группы компетенции",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор группы компетенции",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Competences"],
        "summary": "Правка группы компетенций",
        "operationId": "UpdateGroupCompetence",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор группы компетенций",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор группы компетенций",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto группы компетенций",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GroupCompetencesInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/GroupCompetencesInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/GroupCompetencesInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["Competences"],
        "summary": "Удаление группы компетенции",
        "operationId": "DeleteGroupCompetence",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой группы компетенций",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой группы компетенций",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Competences/{id}/competences": {
      "get": {
        "tags": ["Competences"],
        "summary": "Получение всех компетенций по идентификатору",
        "operationId": "GetAllCompetences",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CompetenceDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CompetenceDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/CompetenceDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Competences/groupsCompetences": {
      "get": {
        "tags": ["Competences"],
        "summary": "Постраничный запрос списка групп компетенций",
        "operationId": "GetAllGroups",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupCompetencesDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Complexes/{id}": {
      "get": {
        "tags": ["Complexes"],
        "summary": "Получение комплекса по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор комплекса",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор комплекса",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Complexes"],
        "summary": "Правка комплекса",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор комплекса",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор комплекса",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto комплекса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": ["Complexes"],
        "summary": "Правка комплекса",
        "operationId": "Patch",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор комплекса",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор комплекса",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto комплекса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexCardInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexCardInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexCardInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["Complexes"],
        "summary": "Удаление комплекса",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемого комплекса",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемого комплекса",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Complexes": {
      "get": {
        "tags": ["Complexes"],
        "summary": "Постраничный запрос списка комплексов",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["Complexes"],
        "summary": "Вставка комплекса",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto комплекса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ComplexInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ComplexDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/AdditionalEducationType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику видов дополнительного образования физических лиц (IT2G.KS.Data.Entities.ExternalDictionaries.AdditionalEducationType)",
        "operationId": "GetAdditionalEducationTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/ClassGradeType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику классных чинов (IT2G.KS.Data.Entities.ExternalDictionaries.ClassGradeType)",
        "operationId": "GetClassGradeTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/EducationDocumentType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику типов документов об образовании (IT2G.KS.Data.Entities.ExternalDictionaries.EducationDocumentType)",
        "operationId": "GetEducationDocumentTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/EducationType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику типов образования (IT2G.KS.Data.Entities.ExternalDictionaries.EducationType)",
        "operationId": "GetEducationTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/EmploymentType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику видов занятости (IT2G.KS.Data.Entities.ExternalDictionaries.EmploymentType)",
        "operationId": "GetEmploymentTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/ExperienceType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику видов стажа (IT2G.KS.Data.Entities.ExternalDictionaries.ExperienceType)",
        "operationId": "GetExperienceTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/UserCertificateType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику видов справок (IT2G.KS.Data.Entities.ExternalDictionaries.UserCertificateType)",
        "operationId": "GetUserCertificateTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/UserDocumentType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику видов документов, удостоверяющих личность (IT2G.KS.Data.Entities.ExternalDictionaries.UserDocumentType)",
        "operationId": "GetUserDocumentTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/StaffStatusType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику видов кадровых состояний (IT2G.KS.Data.Entities.ExternalDictionaries.StaffStatusType)",
        "operationId": "GetStaffStatusTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/StaffStructureType": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику видов кадровых структур (IT2G.KS.Data.Entities.ExternalDictionaries.StaffStructureType)",
        "operationId": "GetStaffStructureTypes",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureTypeDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureTypeDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureTypeDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Dictionaries/OrganizationalForm": {
      "get": {
        "tags": ["Dictionaries"],
        "summary": "Получение данных по справочнику организационных форм (IT2G.KS.Data.Entities.ExternalDictionaries.OrganizationalForm)",
        "operationId": "GetOrganizationalForms",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationalFormDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationalFormDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationalFormDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Import/structure": {
      "post": {
        "tags": ["Import"],
        "summary": "Загрузка файла межведомственной структуры",
        "operationId": "Upload",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "description": "",
                    "format": "binary",
                    "nullable": true
                  }
                }
              },
              "encoding": {
                "file": {
                  "style": "form"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Import/organizational-structure": {
      "post": {
        "tags": ["Import"],
        "summary": "Загрузка файла организационной структуры организации",
        "operationId": "Upload",
        "parameters": [{
          "name": "start",
          "in": "query",
          "description": "Номер строки с которой начинаются данные",
          "schema": {
            "type": "integer",
            "description": "Номер строки с которой начинаются данные",
            "format": "int32",
            "default": 4
          }
        }],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "description": "Файл данных в формате xlsx",
                    "format": "binary",
                    "nullable": true
                  }
                }
              },
              "encoding": {
                "file": {
                  "style": "form"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/JobPositions/{id}/reversions/{reversion}": {
      "get": {
        "tags": ["JobPositions"],
        "summary": "Получить версию сущности",
        "operationId": "GetVersion",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }, {
          "name": "reversion",
          "in": "path",
          "description": "Дата ревизии",
          "required": true,
          "schema": {
            "type": "string",
            "description": "Дата ревизии",
            "format": "date-time"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/JobPositions/{id}/revisions": {
      "get": {
        "tags": ["JobPositions"],
        "summary": "Получить список версий сущности",
        "operationId": "GetVersionList",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/JobPositions/{id}": {
      "get": {
        "tags": ["JobPositions"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["JobPositions"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["JobPositions"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/JobPositions": {
      "get": {
        "tags": ["JobPositions"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["JobPositions"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Kanban": {
      "get": {
        "tags": ["Kanban"],
        "summary": "Получение запросов с доски с фильтрацией",
        "operationId": "GetList",
        "parameters": [{
          "name": "IAmAuthor",
          "in": "query",
          "description": "Я автор",
          "schema": {
            "type": "boolean",
            "description": "Я автор"
          }
        }, {
          "name": "IAmExecutor",
          "in": "query",
          "description": "Я исполнитель",
          "schema": {
            "type": "boolean",
            "description": "Я исполнитель"
          }
        }, {
          "name": "IAmWatcher",
          "in": "query",
          "description": "Я наблюдатель",
          "schema": {
            "type": "boolean",
            "description": "Я наблюдатель"
          }
        }, {
          "name": "Types",
          "in": "query",
          "description": "Типы задач",
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskType"
            },
            "description": "Типы задач",
            "nullable": true
          }
        }, {
          "name": "States",
          "in": "query",
          "description": "Статусы задач",
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskState"
            },
            "description": "Статусы задач",
            "nullable": true
          }
        }, {
          "name": "SortDirection",
          "in": "query",
          "schema": {
            "$ref": "#/components/schemas/Direction"
          }
        }, {
          "name": "SortField",
          "in": "query",
          "schema": {
            "$ref": "#/components/schemas/TaskSortField"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/KanbanTaskDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/KanbanTaskDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/KanbanTaskDto"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Kanban/maps": {
      "get": {
        "tags": ["Kanban"],
        "summary": "Получение всех возможных переходов по всем видам задач",
        "operationId": "GetMaps",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/KanbanTaskFsmDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/KanbanTaskFsmDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/KanbanTaskFsmDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/ManagerialPositions/{id}": {
      "get": {
        "tags": ["ManagerialPositions"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности кадрового объекта",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности кадрового объекта",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ManagerialPositionCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ManagerialPositionCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ManagerialPositionCardDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["ManagerialPositions"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности кадрового объекта",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности кадрового объекта",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ManagerialPositionCardInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ManagerialPositionCardInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ManagerialPositionCardInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Mayor/current": {
      "get": {
        "tags": ["Mayor"],
        "summary": "Получение текущего мэра",
        "operationId": "GetCurrent",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserBaseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserBaseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserBaseDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Organizations/byParent/{id}": {
      "get": {
        "tags": ["Organizations"],
        "summary": "Получение дочерних организаций",
        "operationId": "GetByParentId",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Запрашиваемая страница",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Запрашиваемая страница",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/OrganizationDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/OrganizationDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/OrganizationDto"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Organizations/{id}": {
      "put": {
        "tags": ["Organizations"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/OrganizationInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/OrganizationInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/OrganizationInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationCardDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["Organizations"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationCardDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["Organizations"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Organizations": {
      "get": {
        "tags": ["Organizations"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["Organizations"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/OrganizationInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/OrganizationInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/OrganizationInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Organizations/{id}/revisions/{revision}": {
      "get": {
        "tags": ["Organizations"],
        "operationId": "GetVersion",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }, {
          "name": "revision",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string",
            "format": "date-time"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OrganizationCardDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Organizations/{id}/revisions": {
      "get": {
        "tags": ["Organizations"],
        "operationId": "GetVersionList",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/PositionCard/{id}": {
      "get": {
        "tags": ["PositionCard"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности кадрового объекта",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности кадрового объекта",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionCardDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["PositionCard"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности кадрового объекта",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности кадрового объекта",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionCardInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionCardInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PositionCardInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Positions/{id}": {
      "put": {
        "tags": ["Positions"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PositionDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["Positions"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["Positions"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Positions/staffStructureObject/{id}": {
      "get": {
        "tags": ["Positions"],
        "summary": "Получение карточки должности по идентификатору кадрового объекта",
        "operationId": "GetByStaffStructureObjectId",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор кадрового объекта",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор кадрового объекта",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionCardDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Positions": {
      "get": {
        "tags": ["Positions"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["Positions"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/PositionInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Positions/{staffStructureObjectId}/history": {
      "get": {
        "tags": ["Positions"],
        "summary": "Получение списка пользователей на позиции",
        "operationId": "GetUsersOnPosition",
        "parameters": [{
          "name": "staffStructureObjectId",
          "in": "path",
          "description": "Идентификатор объекта кадровой структуры",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор объекта кадровой структуры",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PositionHistoryItemDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PositionHistoryItemDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PositionHistoryItemDto"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Positions/{id}/revisions/{revision}": {
      "get": {
        "tags": ["Positions"],
        "operationId": "GetVersion",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }, {
          "name": "revision",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string",
            "format": "date-time"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PositionDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Positions/{id}/revisions": {
      "get": {
        "tags": ["Positions"],
        "operationId": "GetVersionList",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/ResultsOfLearning/{id}": {
      "get": {
        "tags": ["ResultsOfLearning"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["ResultsOfLearning"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ResultOfLearningDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ResultOfLearningDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ResultOfLearningDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["ResultsOfLearning"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/ResultsOfLearning": {
      "get": {
        "tags": ["ResultsOfLearning"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["ResultsOfLearning"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ResultOfLearningDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ResultOfLearningDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ResultOfLearningDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ResultOfLearningDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/RootStructure": {
      "get": {
        "tags": ["RootStructure"],
        "summary": "Получение кадровой структуры с руководителями для красивого отображения",
        "operationId": "GetStaffStructureInRoot",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/StaffStructureInRootDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/StaffStructureInRootDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/StaffStructureInRootDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/RootStructure/ComplexesWithOrganization": {
      "get": {
        "tags": ["RootStructure"],
        "summary": "Получение кадровой структуры с руководителями для красивого отображения",
        "operationId": "GetComplexWithOrganizations",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ComplexDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ComplexDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ComplexDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Search": {
      "get": {
        "tags": ["Search"],
        "summary": "Поиск вхождений строки для",
        "operationId": "Search",
        "parameters": [{
          "name": "query",
          "in": "query",
          "description": "строка запроса",
          "schema": {
            "type": "string",
            "description": "строка запроса",
            "nullable": true
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/SearchResultDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/SearchResultDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/SearchResultDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffObjects/{id}": {
      "get": {
        "tags": ["StaffObjects"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["StaffObjects"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureObjectInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureObjectInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureObjectInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["StaffObjects"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffObjects": {
      "get": {
        "tags": ["StaffObjects"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "StaffStructureId",
          "in": "query",
          "description": "фильтр по кадровой структуре",
          "schema": {
            "type": "integer",
            "description": "фильтр по кадровой структуре",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["StaffObjects"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureObjectInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureObjectInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureObjectInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructureProject": {
      "post": {
        "tags": ["StaffStructureProject"],
        "summary": "Созданиие карточки проекта",
        "operationId": "Create",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureProjectInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureProjectInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureProjectInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["StaffStructureProject"],
        "summary": "Получение списка карточек проектов",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "FilterBy",
          "in": "query",
          "description": "Условие фильтрации",
          "schema": {
            "$ref": "#/components/schemas/StaffStructureProjectFilter"
          }
        }, {
          "name": "SortDirection",
          "in": "query",
          "schema": {
            "$ref": "#/components/schemas/Direction"
          }
        }, {
          "name": "SortField",
          "in": "query",
          "schema": {
            "$ref": "#/components/schemas/StaffStructureProjectSorting"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructureProject/{id}": {
      "put": {
        "tags": ["StaffStructureProject"],
        "summary": "Обновление карточки проекта",
        "operationId": "Update",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureProjectInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureProjectInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureProjectInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["StaffStructureProject"],
        "summary": "Получение карточки проекта по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureProjectCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureProjectCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureProjectCardDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["StaffStructureProject"],
        "summary": "Удаление карточки проекта структуры",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructureProjectComments/entities/{entityId}/comment": {
      "post": {
        "tags": ["StaffStructureProjectComments"],
        "summary": "Добавить комментарий",
        "operationId": "AddComment",
        "parameters": [{
          "name": "entityId",
          "in": "path",
          "description": "Идентификатор сущности которую комментируют",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности которую комментируют",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Комментарий",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CommentInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CommentInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CommentInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CommentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommentDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructureProjectComments/{id}": {
      "put": {
        "tags": ["StaffStructureProjectComments"],
        "summary": "Редактировать комментарий",
        "operationId": "UpdateComment",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор комментария",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор комментария",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Новый комментарий",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CommentInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CommentInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CommentInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CommentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommentDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["StaffStructureProjectComments"],
        "summary": "Удалить комментарий",
        "operationId": "DeleteComment",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор комментария",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор комментария",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructures/{id}/reversions/{reversion}": {
      "get": {
        "tags": ["StaffStructures"],
        "summary": "Получить версию сущности",
        "operationId": "GetVersion",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }, {
          "name": "reversion",
          "in": "path",
          "description": "Дата ревизии",
          "required": true,
          "schema": {
            "type": "string",
            "description": "Дата ревизии",
            "format": "date-time"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructures/{id}/revisions": {
      "get": {
        "tags": ["StaffStructures"],
        "summary": "Получить список версий сущности",
        "operationId": "GetVersionList",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructures/byOrganization/{organizationId}": {
      "get": {
        "tags": ["StaffStructures"],
        "summary": "Получение организационной кадровой стуктуры по идентификатору организации",
        "operationId": "GetByOrganization",
        "parameters": [{
          "name": "organizationId",
          "in": "path",
          "description": "Идентификатор организации",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор организации",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructures/{id}": {
      "get": {
        "tags": ["StaffStructures"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["StaffStructures"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["StaffStructures"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StaffStructures": {
      "get": {
        "tags": ["StaffStructures"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Has",
          "in": "query",
          "description": "Фильтрация загрузки кадровых структур",
          "schema": {
            "$ref": "#/components/schemas/StaffStructureLoadingFilter"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["StaffStructures"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StaffStructureInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StageStatuses/{id}": {
      "get": {
        "tags": ["StageStatuses"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["StageStatuses"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StageStatusDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StageStatusDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StageStatusDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["StageStatuses"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StageStatuses": {
      "get": {
        "tags": ["StageStatuses"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["StageStatuses"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/StageStatusDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/StageStatusDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/StageStatusDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StageStatusDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StructureKinds/{id}": {
      "get": {
        "tags": ["StructureKinds"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["StructureKinds"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["StructureKinds"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StructureKinds": {
      "get": {
        "tags": ["StructureKinds"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Наименование",
          "schema": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["StructureKinds"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StructureType/{id}": {
      "get": {
        "tags": ["StructureType"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["StructureType"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["StructureType"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/StructureType": {
      "get": {
        "tags": ["StructureType"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Наименование",
          "schema": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["StructureType"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/DictionaryInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/DictionaryDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Subdivisions/{id}": {
      "put": {
        "tags": ["Subdivisions"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SubdivisionInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/SubdivisionInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/SubdivisionInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["Subdivisions"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionCardDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionCardDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionCardDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["Subdivisions"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Subdivisions": {
      "post": {
        "tags": ["Subdivisions"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SubdivisionInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/SubdivisionInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/SubdivisionInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["Subdivisions"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Subdivisions/{id}/revisions/{revision}": {
      "get": {
        "tags": ["Subdivisions"],
        "operationId": "GetVersion",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }, {
          "name": "revision",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string",
            "format": "date-time"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubdivisionCardDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Subdivisions/{id}/revisions": {
      "get": {
        "tags": ["Subdivisions"],
        "operationId": "GetVersionList",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Subordinates/{staffStructureId}": {
      "get": {
        "tags": ["Subordinates"],
        "summary": "Получение кадровых объектов деревом для заданной кадровой структуры",
        "operationId": "GetSubordinates",
        "parameters": [{
          "name": "staffStructureId",
          "in": "path",
          "description": "Идентификатор кадровой структуры",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор кадровой структуры",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffStructureObjectDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/vacation-request/{taskId}": {
      "get": {
        "tags": ["Task"],
        "summary": "Получить детальную информацию по запросу на отпуск",
        "operationId": "GetVacationRequest",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/VacationRequestDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/VacationRequestDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/VacationRequestDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Task"],
        "summary": "Обновить черновик запроса или задачу в статусе `на доработке` на отпуск",
        "operationId": "UpdateVacancyRequestDraft",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateVacationRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateVacationRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateVacationRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/Task/vacation-request": {
      "post": {
        "tags": ["Task"],
        "summary": "Создать запрос на отпуск",
        "operationId": "CreateNewVacancyRequest",
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateVacationRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateVacationRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateVacationRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/staff-pickup-request/{taskId}": {
      "get": {
        "tags": ["Task"],
        "summary": "Получить детальную информацию по запросу на подбор персонала",
        "operationId": "GetStaffPickupRequest",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StaffPickupRequestDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffPickupRequestDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StaffPickupRequestDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Task"],
        "summary": "Обновить черновик запроса или задачу в статусе `на доработке` на подбор персонала",
        "operationId": "UpdateStaffPickupRequestDraft",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateStaffPickupRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateStaffPickupRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateStaffPickupRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/Task/staff-pickup-request": {
      "post": {
        "tags": ["Task"],
        "summary": "Создать запрос на подбор персонала",
        "operationId": "CreateNewStaffPickupRequest",
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateStaffPickupRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateStaffPickupRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateStaffPickupRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/common-request/{taskId}": {
      "get": {
        "tags": ["Task"],
        "summary": "Получить детальную информацию по запросу общего типа",
        "operationId": "GetCommonRequest",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/KanbanTaskDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/KanbanTaskDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/KanbanTaskDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Task"],
        "summary": "Обновить черновик запроса общего типа",
        "operationId": "UpdateCommonRequestDraft",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateCommonRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateCommonRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateCommonRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/Task/common-request": {
      "post": {
        "tags": ["Task"],
        "summary": "Создать запрос общего типа",
        "operationId": "CreateNewCommonRequest",
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateCommonRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateCommonRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateCommonRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/actualize-data-request/{taskId}": {
      "get": {
        "tags": ["Task"],
        "summary": "Получить детальную информацию по запросу на актуализацию данных",
        "operationId": "GetActualizeDataRequest",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ActualizeDataRequestDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ActualizeDataRequestDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ActualizeDataRequestDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["Task"],
        "summary": "Обновить черновик запроса на актуализацию данных",
        "operationId": "UpdateActualizeDataRequestDraft",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateActualizeDataRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateActualizeDataRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateActualizeDataRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/Task/actualize-data-request": {
      "post": {
        "tags": ["Task"],
        "summary": "Создать запрос на актуализацию данных",
        "operationId": "CreateActualizeDataRequest",
        "requestBody": {
          "description": "Описание запроса",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateActualizeDataRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateActualizeDataRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CreateActualizeDataRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/{taskId}": {
      "delete": {
        "tags": ["Task"],
        "summary": "Удалить черновик задачи",
        "operationId": "Delete",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/Task/{taskId}/inprogress": {
      "put": {
        "tags": ["Task"],
        "summary": "Перевести задачу в работу",
        "operationId": "MoveToInProgress",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Комманда перевода в работу",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/MoveToInProgressCommandDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/MoveToInProgressCommandDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/MoveToInProgressCommandDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/{taskId}/underconsideration": {
      "put": {
        "tags": ["Task"],
        "summary": "Перевести задачу на утверждение",
        "operationId": "MoveToUnderConsideration",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Комманда перевода на согласование",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/MoveToUnderConsiderationCommandDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/MoveToUnderConsiderationCommandDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/MoveToUnderConsiderationCommandDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/{taskId}/cancel": {
      "put": {
        "tags": ["Task"],
        "summary": "Отменить задачу",
        "operationId": "MoveToCancel",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Task/{taskId}/complete": {
      "put": {
        "tags": ["Task"],
        "summary": "Завершить задачу",
        "operationId": "MoveToComplete",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskState"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/TaskComments/tasks/{taskId}/comment": {
      "post": {
        "tags": ["TaskComments"],
        "summary": "Добавить комментарий задачи",
        "operationId": "AddComment",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Комментарий",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskCommentInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskCommentInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TaskCommentInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TaskCommentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskCommentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskCommentDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/TaskComments/{id}": {
      "put": {
        "tags": ["TaskComments"],
        "summary": "Редактировать комментарий задачи",
        "operationId": "UpdateComment",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор комментария",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор комментария",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Новый комментарий",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskCommentInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskCommentInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TaskCommentInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TaskCommentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskCommentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TaskCommentDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["TaskComments"],
        "summary": "Удалить комментарий задачи",
        "operationId": "DeleteComment",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор комментария",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор комментария",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/TaskWatchers/{taskId}": {
      "put": {
        "tags": ["TaskWatchers"],
        "summary": "",
        "operationId": "Update",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskWatchersInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TaskWatchersInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TaskWatchersInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      },
      "get": {
        "tags": ["TaskWatchers"],
        "summary": "",
        "operationId": "GetList",
        "parameters": [{
          "name": "taskId",
          "in": "path",
          "description": "Идентификатор задачи",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBaseDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBaseDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserBaseDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/TestBusMessage": {
      "post": {
        "tags": ["TestBusMessage"],
        "summary": "Отправить уведомление",
        "operationId": "SendMessage",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/HubMessageDtoBusMessageModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/HubMessageDtoBusMessageModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/HubMessageDtoBusMessageModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/UserCertificates/{id}": {
      "get": {
        "tags": ["UserCertificates"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["UserCertificates"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserCertificateInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserCertificateInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserCertificateInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserCertificates"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserCertificates": {
      "get": {
        "tags": ["UserCertificates"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["UserCertificates"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserCertificateInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserCertificateInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserCertificateInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCertificateDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserDocuments/{id}": {
      "get": {
        "tags": ["UserDocuments"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["UserDocuments"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserDocumentInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserDocumentInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserDocumentInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserDocuments"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserDocuments": {
      "get": {
        "tags": ["UserDocuments"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["UserDocuments"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserDocumentInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserDocumentInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserDocumentInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDocumentDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserEducation/{id}": {
      "get": {
        "tags": ["UserEducation"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["UserEducation"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEducationInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEducationInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserEducationInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserEducation"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserEducation": {
      "get": {
        "tags": ["UserEducation"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["UserEducation"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEducationInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEducationInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserEducationInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEducationDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserEmails/{id}": {
      "get": {
        "tags": ["UserEmails"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["UserEmails"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEmailInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEmailInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserEmailInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserEmails"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserEmails": {
      "get": {
        "tags": ["UserEmails"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["UserEmails"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEmailInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserEmailInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserEmailInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserEmailDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserExperience/{id}": {
      "get": {
        "tags": ["UserExperience"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["UserExperience"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserExperienceInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserExperienceInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserExperienceInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserExperience"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserExperience": {
      "get": {
        "tags": ["UserExperience"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["UserExperience"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserExperienceInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserExperienceInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserExperienceInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserExperienceDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserNotifications/{id}": {
      "get": {
        "tags": ["UserNotifications"],
        "summary": "Получение уведомления пользователя по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор уведомления",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор уведомления",
            "format": "int64"
          }
        }],
        "responses": {
          "405": {
            "description": "Method Not Allowed",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserNotifications": {
      "post": {
        "tags": ["UserNotifications"],
        "summary": "Создание уведомления для пользователя",
        "operationId": "Post",
        "requestBody": {
          "description": "Реквест на создание уведомления IT2G.KS.Dto.UserNotification.UserNotificationInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": ["UserNotifications"],
        "summary": "Постраничный запрос списка уведомлений пользователя",
        "operationId": "GetList",
        "parameters": [{
          "name": "All",
          "in": "query",
          "description": "Уведомления все, или только непрочитанные",
          "schema": {
            "type": "boolean",
            "description": "Уведомления все, или только непрочитанные"
          }
        }, {
          "name": "StartDate",
          "in": "query",
          "description": "Дата начала диапазона",
          "schema": {
            "type": "string",
            "description": "Дата начала диапазона",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "EndDate",
          "in": "query",
          "description": "Дата окончания диапазона",
          "schema": {
            "type": "string",
            "description": "Дата окончания диапазона",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Search",
          "in": "query",
          "description": "Текст для поиска в заголовке или описание",
          "schema": {
            "type": "string",
            "description": "Текст для поиска в заголовке или описание",
            "nullable": true
          }
        }, {
          "name": "Type",
          "in": "query",
          "description": "Тип уведомления",
          "schema": {
            "$ref": "#/components/schemas/UserNotificationType"
          }
        }, {
          "name": "Title",
          "in": "query",
          "description": "Тема уведомления",
          "schema": {
            "$ref": "#/components/schemas/UserNotificationTitleType"
          }
        }, {
          "name": "SortDirection",
          "in": "query",
          "schema": {
            "$ref": "#/components/schemas/Direction"
          }
        }, {
          "name": "SortField",
          "in": "query",
          "schema": {
            "$ref": "#/components/schemas/UserNotificationSorting"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserNotificationDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserNotifications"],
        "summary": "Удалить уведомления пользователя по массиву идентификаторов",
        "operationId": "Delete",
        "requestBody": {
          "description": "Реквест IT2G.KS.Dto.UserNotification.UserNotificationUpdateInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserNotifications/count": {
      "get": {
        "tags": ["UserNotifications"],
        "summary": "Получение общего количества уведомлений пользователя",
        "operationId": "GetCount",
        "parameters": [{
          "name": "unRead",
          "in": "query",
          "schema": {
            "type": "boolean",
            "default": false
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserNotifications/read": {
      "put": {
        "tags": ["UserNotifications"],
        "summary": "Пометить уведомления пользователя прочитанными по массиву идентификаторов",
        "operationId": "MarkRead",
        "requestBody": {
          "description": "Реквест IT2G.KS.Dto.UserNotification.UserNotificationUpdateInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserNotifications/read/all": {
      "put": {
        "tags": ["UserNotifications"],
        "summary": "Пометить все непрочитанные уведомления пользователя прочитанными",
        "operationId": "MarkReadAll",
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserNotifications/unread": {
      "put": {
        "tags": ["UserNotifications"],
        "summary": "Пометить уведомления пользователя непрочитанными по массиву идентификаторов",
        "operationId": "MarkUnread",
        "requestBody": {
          "description": "Реквест IT2G.KS.Dto.UserNotification.UserNotificationUpdateInputDto",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserNotificationUpdateInputDto"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserNotifications/all": {
      "delete": {
        "tags": ["UserNotifications"],
        "summary": "Удалить все имеющиеся уведомления пользователя",
        "operationId": "DeleteAll",
        "responses": {
          "204": {
            "description": "Success"
          }
        }
      }
    },
    "/ks/api/UserPhones/{id}": {
      "get": {
        "tags": ["UserPhones"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["UserPhones"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserPhoneInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserPhoneInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserPhoneInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserPhones"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserPhones": {
      "get": {
        "tags": ["UserPhones"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["UserPhones"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserPhoneInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserPhoneInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserPhoneInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhoneDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/current/backPreferences": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение настроек предпочтений текущего пользователя",
        "operationId": "GetPreferences",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["Users"],
        "summary": "Сохранение настроек проедпочтений текущего пользователя",
        "operationId": "SavePreferences",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserPreferencesDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserPreferencesDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserPreferencesDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/current/preferences": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение настроек предпочтений текущего пользователя",
        "operationId": "GetFrontPreferences",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["Users"],
        "summary": "Сохранение настроек проедпочтений текущего пользователя",
        "operationId": "SaveFrontPreferences",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/backPreferences": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение настроек предпочтений любого пользователя по идентификатору",
        "operationId": "GetByIdPreferences",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор пользователя",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPreferencesDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/preferences": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение настроек предпочтений любого пользователя по идентификатору",
        "operationId": "GetByIdFrontPreferences",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор пользователя",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/current": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение текущего авторизованного пользователя",
        "operationId": "GetCurrent",
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CurrentUserDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CurrentUserDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CurrentUserDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение списка пользователей",
        "operationId": "Get",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Поиск по имени, отчеству или фамилии",
          "schema": {
            "type": "string",
            "description": "Поиск по имени, отчеству или фамилии",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDtoPagedResponseDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение пользователя по идентификатору",
        "operationId": "GetById",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserDetailsDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDetailsDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDetailsDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/photos": {
      "post": {
        "tags": ["Users"],
        "summary": "Загрузить фото пользователя.",
        "operationId": "Upload",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary",
                    "nullable": true
                  }
                }
              },
              "encoding": {
                "file": {
                  "style": "form"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhotoDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhotoDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPhotoDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/photos/{photoId}": {
      "delete": {
        "tags": ["Users"],
        "summary": "Удалить фото пользователя.",
        "operationId": "RemovePhoto",
        "parameters": [{
          "name": "photoId",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/short": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение пользователя по идентификатору",
        "operationId": "GetShortById",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserBaseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserBaseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserBaseDto"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExceptionContract"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/attachment/{type}": {
      "post": {
        "tags": ["Users"],
        "summary": "Загрузить вложение пользователя.",
        "operationId": "UploadAttachment",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }, {
          "name": "type",
          "in": "path",
          "required": true,
          "schema": {
            "$ref": "#/components/schemas/AttachmentType"
          }
        }],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary",
                    "nullable": true
                  }
                }
              },
              "encoding": {
                "file": {
                  "style": "form"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserAttachmentDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserAttachmentDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserAttachmentDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/attachments/{attachmentId}": {
      "delete": {
        "tags": ["Users"],
        "summary": "Удалить вложение пользователя.",
        "operationId": "RemoveAttachment",
        "parameters": [{
          "name": "attachmentId",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "application/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "text/json": {
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/subordinations": {
      "get": {
        "tags": ["Users"],
        "summary": "Получение всех подчиненностей структур пользователя по идентификатору",
        "operationId": "GetAllSubordinationsById",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserSubordinationStructureDto"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserSubordinationStructureDto"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserSubordinationStructureDto"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/revisions/{revision}": {
      "get": {
        "tags": ["Users"],
        "operationId": "GetVersion",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }, {
          "name": "revision",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string",
            "format": "date-time"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDto"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/Users/{id}/revisions": {
      "get": {
        "tags": ["Users"],
        "operationId": "GetVersionList",
        "parameters": [{
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserStaffData/{id}": {
      "get": {
        "tags": ["UserStaffData"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["UserStaffData"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserStaffDataInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserStaffDataInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserStaffDataInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["UserStaffData"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/UserStaffData": {
      "get": {
        "tags": ["UserStaffData"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "UserId",
          "in": "query",
          "description": "Идентификатор пользователя",
          "schema": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["UserStaffData"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserStaffDataInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserStaffDataInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserStaffDataInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserStaffDataDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/WorkSchedules/{id}": {
      "get": {
        "tags": ["WorkSchedules"],
        "summary": "Получение сущности по идентификатору",
        "operationId": "Get",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": ["WorkSchedules"],
        "summary": "Правка сущности",
        "operationId": "Put",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        }],
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/WorkScheduleInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/WorkScheduleInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/WorkScheduleInputDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": ["WorkSchedules"],
        "summary": "Удаление сущности",
        "operationId": "Delete",
        "parameters": [{
          "name": "id",
          "in": "path",
          "description": "Идентификатор удаляемой сущности",
          "required": true,
          "schema": {
            "type": "integer",
            "description": "Идентификатор удаляемой сущности",
            "format": "int64"
          }
        }],
        "responses": {
          "204": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    },
    "/ks/api/WorkSchedules": {
      "get": {
        "tags": ["WorkSchedules"],
        "summary": "Постраничный запрос списка сущностей",
        "operationId": "GetList",
        "parameters": [{
          "name": "Name",
          "in": "query",
          "description": "Фильтр по наименованию",
          "schema": {
            "type": "string",
            "description": "Фильтр по наименованию",
            "nullable": true
          }
        }, {
          "name": "StartDateModified",
          "in": "query",
          "description": "Начальная дата изменения",
          "schema": {
            "type": "string",
            "description": "Начальная дата изменения",
            "format": "date-time",
            "nullable": true
          }
        }, {
          "name": "Page",
          "in": "query",
          "description": "Номер страницы",
          "schema": {
            "type": "integer",
            "description": "Номер страницы",
            "format": "int32"
          }
        }, {
          "name": "PageSize",
          "in": "query",
          "description": "Число элементов на странице",
          "schema": {
            "type": "integer",
            "description": "Число элементов на странице",
            "format": "int32"
          }
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDtoPagedResponseDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDtoPagedResponseDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDtoPagedResponseDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": ["WorkSchedules"],
        "summary": "Вставка сущности",
        "operationId": "Post",
        "requestBody": {
          "description": "Dto сущности",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/WorkScheduleInputDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/WorkScheduleInputDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/WorkScheduleInputDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/WorkScheduleDto"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProblemDetails"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AbsenceInfoDto": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "absenceType": {
            "type": "string",
            "description": "Вид отсутствия",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "description": "Дата окончания",
            "format": "date-time"
          },
          "fact": {
            "type": "boolean",
            "description": "Фактическое / плановое отсутствие"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Информация о плановых отсутствиях"
      },
      "ProblemDetails": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "nullable": true
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "status": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "detail": {
            "type": "string",
            "nullable": true
          },
          "instance": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": {
          "type": "object",
          "additionalProperties": false
        }
      },
      "AbsenceInfoInputDto": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "absenceType": {
            "type": "string",
            "description": "Вид отсутствия",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "description": "Дата окончания",
            "format": "date-time"
          },
          "fact": {
            "type": "boolean",
            "description": "Фактическое / плановое отсутствие"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Информация об отсутствии"
      },
      "AbsenceInfoDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AbsenceInfoDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "AttachmentDto": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "Идентфикатор",
            "format": "int64"
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла вложения",
            "nullable": true
          },
          "fileSize": {
            "type": "integer",
            "description": "Размер файла вложения",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url файла вложения",
            "nullable": true
          },
          "key": {
            "type": "string",
            "description": "Ключ объекта",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Dto присоединенного файла"
      },
      "HolidayType": {
        "enum": ["Holiday", "WorkAndShortDay", "WorkDay"],
        "type": "string",
        "description": "Тип праздничного дня в производственном календаре"
      },
      "CalendarHolidayDto": {
        "type": "object",
        "properties": {
          "day": {
            "type": "string",
            "description": "День",
            "format": "date-time"
          },
          "year": {
            "type": "integer",
            "description": "Год календаря",
            "format": "int32"
          },
          "holiday": {
            "type": "string",
            "description": "Название праздника",
            "nullable": true
          },
          "dayType": {
            "$ref": "#/components/schemas/HolidayType"
          },
          "dayTypeDescription": {
            "type": "string",
            "description": "Описание типа дня",
            "nullable": true
          },
          "movedDay": {
            "type": "string",
            "description": "День с которого был перенесён выходной день",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Праздничный или выходной день"
      },
      "UserGender": {
        "enum": ["Male", "Female"],
        "type": "string",
        "description": "Пол"
      },
      "SourceSystem": {
        "enum": ["Rk", "Gbu", "Oib", "Ou", "Ks", "OneS"],
        "type": "string",
        "description": "Система как источник данных"
      },
      "UserPhotoDto": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Контракт фото пользователя"
      },
      "UserBaseDto": {
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "description": "Имя",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "description": "Фамилия",
            "nullable": true
          },
          "patronymic": {
            "type": "string",
            "description": "Отчество",
            "nullable": true
          },
          "gender": {
            "$ref": "#/components/schemas/UserGender"
          },
          "photos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserPhotoDto"
            },
            "description": "Cсылки на место расположения фотографий",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Базовый DTO для пользователя с минимальным набором свойств"
      },
      "CandidateBaseDto": {
        "type": "object",
        "properties": {
          "user": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Базовая dto пользователя являющегося кандидатом"
      },
      "DictionaryDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Справочник"
      },
      "UserEducationDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Имя",
            "nullable": true
          },
          "educationType": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "educationalInstitution": {
            "type": "string",
            "description": "Образовательное учреждение",
            "nullable": true
          },
          "specialty": {
            "type": "string",
            "description": "Специальность",
            "nullable": true
          },
          "educationDocumentType": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "series": {
            "type": "string",
            "description": "Серия",
            "nullable": true
          },
          "number": {
            "type": "string",
            "description": "Номер",
            "nullable": true
          },
          "issueDate": {
            "type": "string",
            "description": "Дата выдачи",
            "format": "date-time"
          },
          "qualification": {
            "type": "string",
            "description": "Квалификация",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "description": "Дата окончания",
            "format": "date-time"
          },
          "courseName": {
            "type": "string",
            "description": "Название курса",
            "nullable": true
          },
          "additionalEducationType": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Данные об образовании"
      },
      "UserExperienceDto": {
        "type": "object",
        "properties": {
          "experienceType": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "daysNumber": {
            "type": "integer",
            "description": "Количество дней стажа",
            "format": "int64"
          },
          "monthNumber": {
            "type": "integer",
            "description": "Количество месяцев стажа",
            "format": "int64"
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала отсчета стажа",
            "format": "date-time"
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Опыт работы"
      },
      "AttachmentType": {
        "enum": ["LegalActOnCreation", "LegalActOnName", "StructureStatement", "ByCandidate", "None"],
        "type": "string",
        "description": "Типы всех вложений"
      },
      "UserAttachmentDto": {
        "type": "object",
        "properties": {
          "attachmentType": {
            "$ref": "#/components/schemas/AttachmentType"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Контракт вложение пользователя"
      },
      "CandidateCardDto": {
        "type": "object",
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Номер телефона (Основной)",
            "nullable": true
          },
          "email": {
            "type": "string",
            "description": "Адрес электронной почты (Основной)",
            "nullable": true
          },
          "salary": {
            "type": "number",
            "description": "Зарплатные ожидания",
            "format": "double",
            "nullable": true
          },
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Общая информация",
            "nullable": true
          },
          "motivations": {
            "type": "string",
            "description": "Что важно для кандидата",
            "nullable": true
          },
          "competences": {
            "type": "string",
            "description": "Профессиональные компетенции",
            "nullable": true
          },
          "personalQualities": {
            "type": "string",
            "description": "Личностные качества",
            "nullable": true
          },
          "user": {
            "$ref": "#/components/schemas/CandidateBaseDto"
          },
          "dateOfBirth": {
            "type": "string",
            "description": "Дата рождения кандидата",
            "format": "date-time",
            "nullable": true
          },
          "education": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserEducationDto"
            },
            "description": "Информация об образовании пользователя являющимся кандидатом",
            "nullable": true
          },
          "experience": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserExperienceDto"
            },
            "description": "Информация о стаже пользователя являющимся кандидатом",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserAttachmentDto"
            },
            "description": "Вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Карточка кандидата"
      },
      "CandidateCardInputDto": {
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "description": "Имя",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "description": "Фамилия",
            "nullable": true
          },
          "patronymic": {
            "type": "string",
            "description": "Отчество",
            "nullable": true
          },
          "dateOfBirth": {
            "type": "string",
            "description": "Дата рождения",
            "format": "date-time",
            "nullable": true
          },
          "phoneNumber": {
            "type": "string",
            "description": "Номер телефона",
            "nullable": true
          },
          "email": {
            "type": "string",
            "description": "Адрес электронной почты",
            "nullable": true
          },
          "salary": {
            "type": "number",
            "description": "Зарплатные ожидания",
            "format": "double",
            "nullable": true
          },
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Общая информация",
            "nullable": true
          },
          "motivations": {
            "type": "string",
            "description": "Что важно для кандидата",
            "nullable": true
          },
          "competences": {
            "type": "string",
            "description": "Профессиональные компетенции",
            "nullable": true
          },
          "personalQualities": {
            "type": "string",
            "description": "Личностные качества",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Карточка кандидата"
      },
      "CandidateBaseDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CandidateBaseDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "StageStatusDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Название этапа",
            "nullable": true
          },
          "accepted": {
            "type": "boolean",
            "description": "Положительный результат"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Статус этапа"
      },
      "TaskShortDto": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "Идентификатор задачи",
            "format": "int64"
          },
          "title": {
            "type": "string",
            "description": "Заголовок",
            "nullable": true
          },
          "createDate": {
            "type": "string",
            "description": "Дата создания",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Короткое описание задачи"
      },
      "CandidateStageDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Название этапа",
            "nullable": true
          },
          "status": {
            "$ref": "#/components/schemas/StageStatusDto"
          },
          "date": {
            "type": "string",
            "description": "Дата",
            "format": "date-time",
            "nullable": true
          },
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          },
          "requestId": {
            "type": "integer",
            "description": "Идентификатор запроса",
            "format": "int64"
          },
          "task": {
            "$ref": "#/components/schemas/TaskShortDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Этап"
      },
      "CandidateStageInputDto": {
        "type": "object",
        "properties": {
          "cardId": {
            "type": "integer",
            "description": "Карточка кандидата",
            "format": "int64"
          },
          "requestId": {
            "type": "integer",
            "description": "Запрос на подбор",
            "format": "int64"
          },
          "name": {
            "type": "string",
            "description": "Название этапа",
            "nullable": true
          },
          "statusId": {
            "type": "integer",
            "description": "Статус",
            "format": "int64",
            "nullable": true
          },
          "date": {
            "type": "string",
            "description": "Дата",
            "format": "date-time",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Этап"
      },
      "StageChangeStatusDto": {
        "type": "object",
        "properties": {
          "statusId": {
            "type": "integer",
            "description": "Стату этапа",
            "format": "int64",
            "nullable": true
          },
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Команда смены статуса этапа"
      },
      "CandidateSummaryStageDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "ФИО кандидата",
            "nullable": true
          },
          "currentState": {
            "type": "string",
            "description": "Текущий статус",
            "nullable": true
          },
          "nextStage": {
            "type": "string",
            "description": "Планируемый статус",
            "nullable": true
          },
          "scheduledDate": {
            "type": "string",
            "description": "Планируемая дата",
            "format": "date-time",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Обобщенный статус кандидата"
      },
      "CompetenceInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Компетенция",
            "nullable": true
          },
          "groupCompetencesId": {
            "type": "integer",
            "description": "Идентификатор группы компетенций",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Компетенция"
      },
      "GroupCompetencesDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование группы компетенций",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Профессиональные компетенции"
      },
      "CompetenceDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Компетенция",
            "nullable": true
          },
          "groupCompetences": {
            "$ref": "#/components/schemas/GroupCompetencesDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Компетенция"
      },
      "GroupCompetencesInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование группы компетенций",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Профессиональные компетенции"
      },
      "GroupCompetencesDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GroupCompetencesDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "ComplexCardAttachmentDto": {
        "type": "object",
        "properties": {
          "attachmentType": {
            "$ref": "#/components/schemas/AttachmentType"
          },
          "name": {
            "type": "string",
            "description": "Имя вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Вложение карточки комплекса"
      },
      "OrganizationWithChildShortDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование организации",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование организации",
            "nullable": true
          },
          "chief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "children": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OrganizationWithChildShortDto"
            },
            "description": "Организация",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Организация"
      },
      "DivisionType": {
        "enum": ["Complex"],
        "type": "string",
        "description": "Типы дивизиона"
      },
      "ComplexDto": {
        "type": "object",
        "properties": {
          "chief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "htmlColor": {
            "type": "string",
            "description": "Значение цвета HTML",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ComplexCardAttachmentDto"
            },
            "description": "Вложениия",
            "nullable": true
          },
          "organizations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OrganizationWithChildShortDto"
            },
            "description": "Организации",
            "nullable": true
          },
          "type": {
            "$ref": "#/components/schemas/DivisionType"
          },
          "name": {
            "type": "string",
            "description": "Наименование комплекса",
            "nullable": true
          },
          "shortName": {
            "type": "string",
            "description": "Короткое наименование комплекса",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Краткое описание",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Комлпекс"
      },
      "LegalAttachmentInputDto": {
        "type": "object",
        "properties": {
          "attachmentType": {
            "$ref": "#/components/schemas/AttachmentType"
          },
          "name": {
            "type": "string",
            "description": "Имя вложения",
            "nullable": true
          },
          "attachmentId": {
            "type": "integer",
            "description": "Идентификатор загруженного вложения",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Контракт юридического вложения"
      },
      "ComplexInputDto": {
        "type": "object",
        "properties": {
          "htmlColor": {
            "type": "string",
            "description": "Значение цвета HTML",
            "nullable": true
          },
          "chiefId": {
            "type": "integer",
            "description": "Руководитель комплекса",
            "format": "int64",
            "nullable": true
          },
          "name": {
            "type": "string",
            "description": "Наименование комплекса",
            "nullable": true
          },
          "shortName": {
            "type": "string",
            "description": "Короткое наименование комплекса",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Краткое описание",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Комплекс"
      },
      "ComplexCardInputDto": {
        "type": "object",
        "properties": {
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Карточка комплекса"
      },
      "ComplexDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ComplexDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "DictionaryDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DictionaryDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "StaffStructureTypeDto": {
        "type": "object",
        "properties": {
          "type": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "typeDescription": {
            "type": "string",
            "description": "Текстовое представление типа кадровой структуры системы КС",
            "nullable": true
          },
          "name": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Тип и вид кадровой структуры"
      },
      "StaffStructureTypeDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/StaffStructureTypeDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "OrganizationalFormDto": {
        "type": "object",
        "properties": {
          "fullName": {
            "type": "string",
            "description": "Полное наименования организационной формы",
            "nullable": true
          },
          "code": {
            "type": "string",
            "description": "Код организационной формы",
            "nullable": true
          },
          "name": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Организационная форма"
      },
      "OrganizationalFormDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OrganizationalFormDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "PositionDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование должности",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование должности",
            "nullable": true
          },
          "isStatePosition": {
            "type": "boolean",
            "description": "Признак государственной должности"
          },
          "fot": {
            "type": "number",
            "description": "Текущий ФОТ",
            "format": "double"
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Должность"
      },
      "PositionInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование должности",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование должности",
            "nullable": true
          },
          "isStatePosition": {
            "type": "boolean",
            "description": "Признак государственной должности"
          },
          "fot": {
            "type": "number",
            "description": "Текущий ФОТ",
            "format": "double"
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Справочник должности - входной контракт"
      },
      "PositionDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PositionDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "TaskType": {
        "enum": ["VacationRequest", "StaffPickupRequest", "CommonRequest", "ActualizeDataRequest"],
        "type": "string"
      },
      "TaskState": {
        "enum": ["New", "UnderConsideration", "InProgress", "Completed", "Canceled"],
        "type": "string"
      },
      "Direction": {
        "enum": ["Asc", "Desc"],
        "type": "string",
        "description": "Направление сортировки"
      },
      "TaskSortField": {
        "enum": ["None", "RequestNumber", "CreatedAt", "EstimateDate"],
        "type": "string",
        "description": "Набор полей по которым доступна сортировка в сущности Задача"
      },
      "TaskCommentDto": {
        "type": "object",
        "properties": {
          "createdAt": {
            "type": "string",
            "description": "Дата добавления комментария",
            "format": "date-time"
          },
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          },
          "authorName": {
            "type": "string",
            "description": "Имя автора комментария",
            "nullable": true
          },
          "authorPosition": {
            "type": "string",
            "description": "Должность автора комментариия",
            "nullable": true
          },
          "editable": {
            "type": "boolean"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Комментарий"
      },
      "BaseAttachmentWithAuthorDto": {
        "type": "object",
        "properties": {
          "authorName": {
            "type": "string",
            "description": "Автор загрузки вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Прикрепленный файл c автором вложения (Фамилия И. O.) и датой создания"
      },
      "KanbanTaskDto": {
        "type": "object",
        "properties": {
          "type": {
            "$ref": "#/components/schemas/TaskType"
          },
          "state": {
            "$ref": "#/components/schemas/TaskState"
          },
          "author": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "executor": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "title": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          },
          "createDate": {
            "type": "string",
            "description": "Дата создания запроса",
            "format": "date-time"
          },
          "comments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskCommentDto"
            },
            "description": "Комментарии",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseAttachmentWithAuthorDto"
            },
            "description": "Прикрепленные документы",
            "nullable": true
          },
          "watchers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserBaseDto"
            },
            "description": "Наблюдатели",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Запрос"
      },
      "TaskTrigger": {
        "enum": ["GetInUnderConsideration", "MoveToCancelled", "GetInWork", "MoveToCompleted"],
        "type": "string"
      },
      "TaskStateTaskTriggerIReadOnlyListKeyValuePair": {
        "type": "object",
        "properties": {
          "key": {
            "$ref": "#/components/schemas/TaskState"
          },
          "value": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskTrigger"
            },
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "KanbanTaskFsmDto": {
        "type": "object",
        "properties": {
          "taskType": {
            "$ref": "#/components/schemas/TaskType"
          },
          "transitions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskStateTaskTriggerIReadOnlyListKeyValuePair"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "AttachWithTypeDto": {
        "type": "object",
        "properties": {
          "attachmentType": {
            "$ref": "#/components/schemas/AttachmentType"
          },
          "name": {
            "type": "string",
            "description": "Имя вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Вложение с типом и именем"
      },
      "ManagerialPositionCardDto": {
        "type": "object",
        "properties": {
          "positionId": {
            "type": "integer",
            "description": "Уникальный идентификатор должности",
            "format": "int64"
          },
          "name": {
            "type": "string",
            "description": "Наименование позиции",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Краткое описание позиции",
            "nullable": true
          },
          "responsibilities": {
            "type": "string",
            "description": "Обязанности",
            "nullable": true
          },
          "requirements": {
            "type": "string",
            "description": "Требования",
            "nullable": true
          },
          "complex": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "subdivision": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "chiefPosition": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "user": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AttachWithTypeDto"
            },
            "description": "Должностные документы",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Карточка позиции (управленка)"
      },
      "ManagerialPositionCardInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование позиции",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Краткое описание позиции",
            "nullable": true
          },
          "responsibilities": {
            "type": "string",
            "description": "Обязанности",
            "nullable": true
          },
          "requirements": {
            "type": "string",
            "description": "Требования",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Карточка позиции (управленка)"
      },
      "RequisitesDto": {
        "type": "object",
        "properties": {
          "legalAddress": {
            "type": "string",
            "description": "Юридический адрес",
            "nullable": true
          },
          "actualAddress": {
            "type": "string",
            "description": "Фактический адрес",
            "nullable": true
          },
          "inn": {
            "type": "string",
            "description": "ИНН (Идентификационный номер налогоплательщика)",
            "nullable": true
          },
          "ogrn": {
            "type": "string",
            "description": "ОГРН (Основной государственный регистрационный номер)",
            "nullable": true
          },
          "kpp": {
            "type": "string",
            "description": "КПП (Код причины постановки)",
            "nullable": true
          },
          "okpo": {
            "type": "string",
            "description": "ОКПО (Общероссийский классификатор предприятий и организаций)",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Контракт реквизиты (Юр. адрес, ИНН, КПП, ОГРН, ОКПО)"
      },
      "OrganizationDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование организации",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование организации",
            "nullable": true
          },
          "requisites": {
            "$ref": "#/components/schemas/RequisitesDto"
          },
          "parent": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "chief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "complex": {
            "$ref": "#/components/schemas/ComplexDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Организация"
      },
      "ContactInformationDto": {
        "type": "object",
        "properties": {
          "phone": {
            "type": "string",
            "description": "Телефон",
            "nullable": true
          },
          "fax": {
            "type": "string",
            "description": "Факс",
            "nullable": true
          },
          "email": {
            "type": "string",
            "description": "Электронная почта",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Контракт контактная информация (Телефон, факс, почта)"
      },
      "PeriodType": {
        "enum": ["Year", "Quarter", "Month"],
        "type": "string",
        "description": "Периоды времени (год, квартал, месяц)"
      },
      "IndicatorsDto": {
        "type": "object",
        "properties": {
          "period": {
            "$ref": "#/components/schemas/PeriodType"
          },
          "wageFund": {
            "type": "number",
            "description": "Фонд оплаты труда (дробная, 4 знака после запятой)",
            "format": "double",
            "nullable": true
          },
          "numberOfStaffUnits": {
            "type": "integer",
            "description": "Штатная численность",
            "format": "int32",
            "nullable": true
          },
          "numberOfEmployedStaffUnits": {
            "type": "integer",
            "description": "Количество занятых штатных единиц",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Контракт показатели (ФОТ, штатная численность, количество занятых штатных единиц)"
      },
      "OrganizationInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование организации",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование организации",
            "nullable": true
          },
          "organizationalFormId": {
            "type": "integer",
            "description": "Организационная форма",
            "format": "int64",
            "nullable": true
          },
          "contactInfo": {
            "$ref": "#/components/schemas/ContactInformationDto"
          },
          "requisites": {
            "$ref": "#/components/schemas/RequisitesDto"
          },
          "functionsAndTasks": {
            "type": "string",
            "description": "Основные функции и задачи",
            "nullable": true
          },
          "parentId": {
            "type": "integer",
            "description": "Родительская организация",
            "format": "int64",
            "nullable": true
          },
          "chiefId": {
            "type": "integer",
            "description": "Руководитель организации",
            "format": "int64",
            "nullable": true
          },
          "indicators": {
            "$ref": "#/components/schemas/IndicatorsDto"
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          },
          "complexId": {
            "type": "integer",
            "description": "Идентификатор комплекса",
            "format": "int64",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Организация"
      },
      "OrganizationCardAttachmentDto": {
        "type": "object",
        "properties": {
          "attachmentType": {
            "$ref": "#/components/schemas/AttachmentType"
          },
          "name": {
            "type": "string",
            "description": "Имя вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Вложение карточки организации"
      },
      "OrganizationBaseDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование организации",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование организации",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Базовый контракт организации"
      },
      "OrganizationCardDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование организации",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование организации",
            "nullable": true
          },
          "contactInfo": {
            "$ref": "#/components/schemas/ContactInformationDto"
          },
          "requisites": {
            "$ref": "#/components/schemas/RequisitesDto"
          },
          "functionsAndTasks": {
            "type": "string",
            "description": "Основные функции и задачи",
            "nullable": true
          },
          "indicators": {
            "$ref": "#/components/schemas/IndicatorsDto"
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OrganizationCardAttachmentDto"
            },
            "description": "Вложения",
            "nullable": true
          },
          "chief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "chiefPosition": {
            "$ref": "#/components/schemas/PositionDto"
          },
          "complex": {
            "$ref": "#/components/schemas/ComplexDto"
          },
          "parent": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "executiveAuthority": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "organizationalForm": {
            "$ref": "#/components/schemas/OrganizationalFormDto"
          },
          "children": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OrganizationBaseDto"
            },
            "description": "Дочерние организации",
            "nullable": true
          },
          "editable": {
            "type": "boolean"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Карточка организации"
      },
      "OrganizationDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OrganizationDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "PositionCardDto": {
        "type": "object",
        "properties": {
          "positionId": {
            "type": "integer",
            "description": "Уникальный идентификатор должности",
            "format": "int64"
          },
          "name": {
            "type": "string",
            "description": "Наименование должности",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Краткое описание должности",
            "nullable": true
          },
          "isStatePosition": {
            "type": "boolean",
            "description": "Признак государственной должности"
          },
          "complex": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "executiveAuthority": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "subdivision": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "chiefPosition": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AttachWithTypeDto"
            },
            "description": "Должностные документы",
            "nullable": true
          },
          "user": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "fot": {
            "type": "number",
            "description": "Текущий ФОТ",
            "format": "double"
          },
          "type": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "responsibilities": {
            "type": "string",
            "description": "Обязанности",
            "nullable": true
          },
          "requirements": {
            "type": "string",
            "description": "Требования",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Карточка должности (оргштатка)"
      },
      "PositionCardInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование должности",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование должности",
            "nullable": true
          },
          "isStatePosition": {
            "type": "boolean",
            "description": "Должность является государственной"
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "fot": {
            "type": "number",
            "description": "Текущий ФОТ",
            "format": "double"
          },
          "responsibilities": {
            "type": "string",
            "description": "Обязанности",
            "nullable": true
          },
          "requirements": {
            "type": "string",
            "description": "Требования",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Карточка должности (оргштатка) - входной контракт"
      },
      "PositionHistoryItemDto": {
        "type": "object",
        "properties": {
          "user": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "dateOfDismissal": {
            "type": "string",
            "description": "Дата увольнения",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Ранее занимавшие должность"
      },
      "ResultOfLearningDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "ФИО получателя",
            "nullable": true
          },
          "educationCourseName": {
            "type": "string",
            "description": "Курс обучения",
            "nullable": true
          },
          "educationCompleted": {
            "type": "boolean",
            "description": "Признак окончания курса"
          },
          "documentObtained": {
            "type": "boolean",
            "description": "Признак получения документа об образовании"
          },
          "seriesNumber": {
            "type": "string",
            "description": "Номер и серия документа об образовании",
            "nullable": true
          },
          "educationProgram": {
            "type": "string",
            "description": "Направление курса",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Информация о пройденых курсах"
      },
      "ResultOfLearningDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ResultOfLearningDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "StaffStructureInRootDto": {
        "type": "object",
        "properties": {
          "complex": {
            "$ref": "#/components/schemas/ComplexDto"
          },
          "type": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "organization": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "position": {
            "$ref": "#/components/schemas/PositionDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Данные для отображения кадровой структуры в основном дереве"
      },
      "SearchResultDto": {
        "type": "object",
        "properties": {
          "originalId": {
            "type": "integer",
            "description": "",
            "format": "int64"
          },
          "table": {
            "type": "string",
            "description": "",
            "nullable": true
          },
          "title": {
            "type": "string",
            "description": "",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": ""
      },
      "SubdivisionDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Название подразделения",
            "nullable": true
          },
          "parentId": {
            "type": "integer",
            "description": "Идентификатор вышестоящего подразделения",
            "format": "int64",
            "nullable": true
          },
          "organization": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "managerialSubdivision": {
            "type": "boolean",
            "description": "Признак управленческого подразделения"
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование подразделения",
            "nullable": true
          },
          "functionsAndTasks": {
            "type": "string",
            "description": "Основные функции и задачи подразделения",
            "nullable": true
          },
          "actualAddress": {
            "type": "string",
            "description": "Фактический адрес подразделения",
            "nullable": true
          },
          "contactInfo": {
            "$ref": "#/components/schemas/ContactInformationDto"
          },
          "indicators": {
            "$ref": "#/components/schemas/IndicatorsDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Подразделение"
      },
      "StaffStructureObjectDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование кадрового объекта",
            "nullable": true
          },
          "staffStructureId": {
            "type": "integer",
            "description": "Идентификатор кадровой структуры",
            "format": "int64"
          },
          "parentId": {
            "type": "integer",
            "description": "Идентификатор родительского кадрового объекта",
            "format": "int64",
            "nullable": true
          },
          "organization": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "subdivision": {
            "$ref": "#/components/schemas/SubdivisionDto"
          },
          "position": {
            "$ref": "#/components/schemas/PositionDto"
          },
          "chief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "children": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/StaffStructureObjectDto"
            },
            "description": "Дочерние элементы",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Кадровый объект"
      },
      "StaffStructureObjectInputDto": {
        "type": "object",
        "properties": {
          "staffStructureId": {
            "type": "integer",
            "description": "Идентификатор кадровой структуры",
            "format": "int64"
          },
          "parentId": {
            "type": "integer",
            "description": "Идентификатор родительского объекта",
            "format": "int64",
            "nullable": true
          },
          "organizationId": {
            "type": "integer",
            "description": "Организация",
            "format": "int64",
            "nullable": true
          },
          "subdivisionId": {
            "type": "integer",
            "description": "Подразделение",
            "format": "int64",
            "nullable": true
          },
          "positionId": {
            "type": "integer",
            "description": "Должность",
            "format": "int64",
            "nullable": true
          },
          "chiefId": {
            "type": "integer",
            "description": "Руководитель подразделения\r\nПримечание: заполняется только для кадровых структур видов\r\n«Управленческая кадровая структура» и «Организационно-штатная кадровая структура»",
            "format": "int64",
            "nullable": true
          },
          "name": {
            "type": "string",
            "description": "Наименование кадрового объекта",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Кадровый объект"
      },
      "StaffStructureObjectDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/StaffStructureObjectDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "StaffStructureProjectState": {
        "enum": ["Draft", "Done", "Approved"],
        "type": "string",
        "description": "Статус проекта структуры"
      },
      "BaseAttachmentInputDto": {
        "type": "object",
        "properties": {
          "attachmentId": {
            "type": "integer",
            "description": "Идентификатор загруженного вложения",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Базовый класс добавления вложений"
      },
      "StaffStructureProjectInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Название",
            "nullable": true
          },
          "members": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Список участников",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "state": {
            "$ref": "#/components/schemas/StaffStructureProjectState"
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseAttachmentInputDto"
            },
            "description": "Вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Проект структуры"
      },
      "StaffStructureProjectFilter": {
        "enum": ["All", "IAmAuthor", "IAmMember"],
        "type": "string",
        "description": "Фильтрация списка проектов"
      },
      "StaffStructureProjectSorting": {
        "enum": ["None", "CreateDate", "State"],
        "type": "string",
        "description": "Набор полей по которым доступна сортировка в реестре проектов"
      },
      "StaffStructureProjectCardAttachmentDto": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Вложение карточки проекта структуры"
      },
      "CommentDto": {
        "type": "object",
        "properties": {
          "createdAt": {
            "type": "string",
            "description": "Дата добавления комментария",
            "format": "date-time"
          },
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          },
          "authorName": {
            "type": "string",
            "description": "Имя автора комментария",
            "nullable": true
          },
          "authorPosition": {
            "type": "string",
            "description": "Должность автора комментариия",
            "nullable": true
          },
          "editable": {
            "type": "boolean"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Комментарий к сущности"
      },
      "StaffStructureProjectCardDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Название",
            "nullable": true
          },
          "createDate": {
            "type": "string",
            "description": "Дата",
            "format": "date-time"
          },
          "author": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "members": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserBaseDto"
            },
            "description": "Члены команды",
            "nullable": true
          },
          "state": {
            "$ref": "#/components/schemas/StaffStructureProjectState"
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/StaffStructureProjectCardAttachmentDto"
            },
            "description": "Вложения",
            "nullable": true
          },
          "comments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommentDto"
            },
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Карточка проекта структуры"
      },
      "CommentInputDto": {
        "type": "object",
        "properties": {
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Контракт комментарий к сущности"
      },
      "StaffStructureSubordination": {
        "enum": ["Mayor", "Complex"],
        "type": "string",
        "description": "Подчиненность кадровой структуры"
      },
      "StaffStructureDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование кадровой структуры",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование кадровой структуры",
            "nullable": true
          },
          "complex": {
            "$ref": "#/components/schemas/ComplexDto"
          },
          "type": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "kind": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "objects": {
            "$ref": "#/components/schemas/StaffStructureObjectDto"
          },
          "staffStructureSubordination": {
            "$ref": "#/components/schemas/StaffStructureSubordination"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Кадровая структура"
      },
      "StaffStructureInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование кадровой структуры",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование кадровой структуры",
            "nullable": true
          },
          "complexId": {
            "type": "integer",
            "description": "Идентификатор комплекса",
            "format": "int64",
            "nullable": true
          },
          "typeId": {
            "type": "integer",
            "description": "Идентификатор типа кадровой структуры",
            "format": "int64"
          },
          "kindId": {
            "type": "integer",
            "description": "Идентификатор вида кадровой структуры",
            "format": "int64",
            "nullable": true
          },
          "objects": {
            "$ref": "#/components/schemas/StaffStructureObjectInputDto"
          },
          "staffStructureSubordination": {
            "$ref": "#/components/schemas/StaffStructureSubordination"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Входная кадровая структура"
      },
      "StaffStructureLoadingFilter": {
        "enum": ["Complex"],
        "type": "string",
        "description": "Фильтры загрузки для StaffStructure"
      },
      "StaffStructureDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/StaffStructureDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "StageStatusDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/StageStatusDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "DictionaryInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Входной справочник"
      },
      "SubdivisionInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Название подразделения",
            "nullable": true
          },
          "parentId": {
            "type": "integer",
            "description": "Идентификатор вышестоящего подразделения",
            "format": "int64",
            "nullable": true
          },
          "organizationId": {
            "type": "integer",
            "description": "Организация",
            "format": "int64"
          },
          "managerialSubdivision": {
            "type": "boolean",
            "description": "Признак управленческого подразделения"
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование подразделения",
            "nullable": true
          },
          "functionsAndTasks": {
            "type": "string",
            "description": "Основные функции и задачи",
            "nullable": true
          },
          "actualAddress": {
            "type": "string",
            "description": "Фактический адрес",
            "nullable": true
          },
          "contactInfo": {
            "$ref": "#/components/schemas/ContactInformationDto"
          },
          "indicators": {
            "$ref": "#/components/schemas/IndicatorsDto"
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentInputDto"
            },
            "description": "Загруженные вложения подразделения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Подразделение"
      },
      "LegalAttachmentDto": {
        "type": "object",
        "properties": {
          "attachmentType": {
            "$ref": "#/components/schemas/AttachmentType"
          },
          "name": {
            "type": "string",
            "description": "Имя вложения",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор документа",
            "format": "int64"
          },
          "url": {
            "type": "string",
            "description": "Url документа",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Имя файла",
            "nullable": true
          },
          "sourceSystemId": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата загрузки документа",
            "format": "date-time"
          }
        },
        "additionalProperties": false,
        "description": "Структурное вложение (для организации или подразделения)"
      },
      "SubdivisionCardDto": {
        "type": "object",
        "properties": {
          "parent": {
            "$ref": "#/components/schemas/SubdivisionDto"
          },
          "chief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "chiefPosition": {
            "$ref": "#/components/schemas/PositionDto"
          },
          "complex": {
            "$ref": "#/components/schemas/ComplexDto"
          },
          "executiveAuthority": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "children": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DictionaryDto"
            },
            "description": "Дочерние подразделения",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LegalAttachmentDto"
            },
            "description": "Коллекция вложений подразделения",
            "nullable": true
          },
          "name": {
            "type": "string",
            "description": "Название подразделения",
            "nullable": true
          },
          "parentId": {
            "type": "integer",
            "description": "Идентификатор вышестоящего подразделения",
            "format": "int64",
            "nullable": true
          },
          "organization": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "managerialSubdivision": {
            "type": "boolean",
            "description": "Признак управленческого подразделения"
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование подразделения",
            "nullable": true
          },
          "functionsAndTasks": {
            "type": "string",
            "description": "Основные функции и задачи подразделения",
            "nullable": true
          },
          "actualAddress": {
            "type": "string",
            "description": "Фактический адрес подразделения",
            "nullable": true
          },
          "contactInfo": {
            "$ref": "#/components/schemas/ContactInformationDto"
          },
          "indicators": {
            "$ref": "#/components/schemas/IndicatorsDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Детали подразделения"
      },
      "SubdivisionDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SubdivisionDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "VacationRequestDto": {
        "type": "object",
        "properties": {
          "deputy": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "staffStatusTypeId": {
            "type": "integer",
            "description": "Тип отпуска",
            "format": "int64"
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала отпуска",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "description": "Дата окончания отпуска",
            "format": "date-time"
          },
          "type": {
            "$ref": "#/components/schemas/TaskType"
          },
          "state": {
            "$ref": "#/components/schemas/TaskState"
          },
          "author": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "executor": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "title": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          },
          "createDate": {
            "type": "string",
            "description": "Дата создания запроса",
            "format": "date-time"
          },
          "comments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskCommentDto"
            },
            "description": "Комментарии",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseAttachmentWithAuthorDto"
            },
            "description": "Прикрепленные документы",
            "nullable": true
          },
          "watchers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserBaseDto"
            },
            "description": "Наблюдатели",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Запрос на отпуск"
      },
      "ExceptionContract": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "nullable": true
          },
          "messages": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "CreateVacationRequestDto": {
        "type": "object",
        "properties": {
          "staffStatusTypeId": {
            "type": "integer",
            "description": "Тип отпуска",
            "format": "int64"
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала отпуска",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "description": "Дата окончания отпуска",
            "format": "date-time"
          },
          "deputyId": {
            "type": "integer",
            "description": "Заместитель(ВРИО)",
            "format": "int64",
            "nullable": true
          },
          "watchers": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Наблюдатели",
            "nullable": true
          },
          "attachmentsId": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Id прикрепленных к запросу документов",
            "nullable": true
          },
          "executorId": {
            "type": "integer",
            "description": "Идентификтор исполнителя",
            "format": "int64",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание запроса",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Создание задачи на отпуск"
      },
      "StaffStructureObjectBaseDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование кадрового объекта",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Базовый DTO для объекта кадровой структуры"
      },
      "WorkScheduleDto": {
        "type": "object",
        "properties": {
          "summaryOfWorkingHours": {
            "type": "boolean",
            "description": "Количество рабочих часов"
          },
          "durationOfWorkingWeek": {
            "type": "integer",
            "description": "Продолжительность рабочей недели",
            "format": "int64"
          },
          "name": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Рабочее расписание"
      },
      "CompetenceWithLevelDto": {
        "type": "object",
        "properties": {
          "competence": {
            "$ref": "#/components/schemas/CompetenceDto"
          },
          "level": {
            "type": "integer",
            "description": "Уровень",
            "format": "int32"
          }
        },
        "additionalProperties": false,
        "description": "Компетенция и уровень"
      },
      "CandidateGroupCompetencesDto": {
        "type": "object",
        "properties": {
          "competences": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CompetenceWithLevelDto"
            },
            "description": "Компетенции в группе",
            "nullable": true
          },
          "group": {
            "$ref": "#/components/schemas/GroupCompetencesDto"
          }
        },
        "additionalProperties": false,
        "description": "Компетенции кандидата"
      },
      "StaffPickupRequestDto": {
        "type": "object",
        "properties": {
          "vacancy": {
            "$ref": "#/components/schemas/StaffStructureObjectBaseDto"
          },
          "subdivision": {
            "$ref": "#/components/schemas/SubdivisionDto"
          },
          "candidateDescription": {
            "type": "string",
            "description": "Общее описание",
            "nullable": true
          },
          "personalQualities": {
            "type": "string",
            "description": "Личностные качества",
            "nullable": true
          },
          "salary": {
            "type": "number",
            "description": "Заработная плата",
            "format": "double"
          },
          "workScheduleId": {
            "type": "integer",
            "description": "Идентификатор графика работы",
            "format": "int64",
            "nullable": true
          },
          "workSchedule": {
            "$ref": "#/components/schemas/WorkScheduleDto"
          },
          "candidates": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CandidateCardDto"
            },
            "description": "Кандидаты",
            "nullable": true
          },
          "candidateCompetences": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CandidateGroupCompetencesDto"
            },
            "description": "Компетенции",
            "nullable": true
          },
          "type": {
            "$ref": "#/components/schemas/TaskType"
          },
          "state": {
            "$ref": "#/components/schemas/TaskState"
          },
          "author": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "executor": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "title": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          },
          "createDate": {
            "type": "string",
            "description": "Дата создания запроса",
            "format": "date-time"
          },
          "comments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskCommentDto"
            },
            "description": "Комментарии",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseAttachmentWithAuthorDto"
            },
            "description": "Прикрепленные документы",
            "nullable": true
          },
          "watchers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserBaseDto"
            },
            "description": "Наблюдатели",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Запрос на подбор персонала"
      },
      "CreateStaffPickupRequestDto": {
        "type": "object",
        "properties": {
          "vacancyId": {
            "type": "integer",
            "description": "Рассматриваемая вакансия",
            "format": "int64",
            "nullable": true
          },
          "subdivisionId": {
            "type": "integer",
            "description": "Подразделениие",
            "format": "int64"
          },
          "candidateDescription": {
            "type": "string",
            "description": "Общее описание",
            "nullable": true
          },
          "personalQualities": {
            "type": "string",
            "description": "Личностные качества",
            "nullable": true
          },
          "salary": {
            "type": "number",
            "description": "Заработная плата",
            "format": "double"
          },
          "workScheduleId": {
            "type": "integer",
            "description": "График работы",
            "format": "int64",
            "nullable": true
          },
          "candidates": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Кандидаты",
            "nullable": true
          },
          "candidateCompetences": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CompetenceWithLevelDto"
            },
            "description": "Компетенции",
            "nullable": true
          },
          "attachmentsId": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Id прикрепленных к запросу документов",
            "nullable": true
          },
          "executorId": {
            "type": "integer",
            "description": "Идентификтор исполнителя",
            "format": "int64",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание запроса",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Создание задачи на подбор персонала"
      },
      "CreateCommonRequestDto": {
        "type": "object",
        "properties": {
          "watchers": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Наблюдатели",
            "nullable": true
          },
          "attachmentsId": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Id прикрепленных к запросу документов",
            "nullable": true
          },
          "executorId": {
            "type": "integer",
            "description": "Идентификтор исполнителя",
            "format": "int64",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание запроса",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Создание задачи общего типа"
      },
      "EntityCardType": {
        "enum": ["OrganizationCard", "SubdivisionCard", "PositionCard", "CandidateCard"],
        "type": "string",
        "description": "Тип карточка сущности"
      },
      "ActualizeObjectDto": {
        "type": "object",
        "properties": {
          "objectType": {
            "$ref": "#/components/schemas/EntityCardType"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Объект актуализации"
      },
      "ActualizeDataRequestDto": {
        "type": "object",
        "properties": {
          "objects": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ActualizeObjectDto"
            },
            "description": "Объекты на актуализацию",
            "nullable": true
          },
          "type": {
            "$ref": "#/components/schemas/TaskType"
          },
          "state": {
            "$ref": "#/components/schemas/TaskState"
          },
          "author": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "executor": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "title": {
            "type": "string",
            "description": "Наименование",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          },
          "createDate": {
            "type": "string",
            "description": "Дата создания запроса",
            "format": "date-time"
          },
          "comments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TaskCommentDto"
            },
            "description": "Комментарии",
            "nullable": true
          },
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseAttachmentWithAuthorDto"
            },
            "description": "Прикрепленные документы",
            "nullable": true
          },
          "watchers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserBaseDto"
            },
            "description": "Наблюдатели",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Запрос на актуализацию данных"
      },
      "CreateActualizeDataRequestDto": {
        "type": "object",
        "properties": {
          "objects": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ActualizeObjectDto"
            },
            "description": "Объекты на актуализацию (Идентификатор - тип объекта)",
            "nullable": true
          },
          "watchers": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Наблюдатели",
            "nullable": true
          },
          "attachmentsId": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Id прикрепленных к запросу документов",
            "nullable": true
          },
          "executorId": {
            "type": "integer",
            "description": "Идентификтор исполнителя",
            "format": "int64",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание запроса",
            "nullable": true
          },
          "estimateDate": {
            "type": "string",
            "description": "Дата исполнения запроса",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Создание запроса на актуализацию данных"
      },
      "MoveToInProgressCommandDto": {
        "type": "object",
        "properties": {
          "executorId": {
            "type": "integer",
            "description": "Исполнитель",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Перевод в работу"
      },
      "MoveToUnderConsiderationCommandDto": {
        "type": "object",
        "properties": {
          "executorId": {
            "type": "integer",
            "description": "Исполнитель",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Перевод на согласование"
      },
      "TaskCommentInputDto": {
        "type": "object",
        "properties": {
          "comment": {
            "type": "string",
            "description": "Комментарий",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Контракт комментарий задачи"
      },
      "TaskWatchersInputDto": {
        "type": "object",
        "properties": {
          "watchers": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Список идентификаторов наблюдателей",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Наблюдатели"
      },
      "HubMessageDto": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "description": "Заголовок",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Модель сообщения для пользователя"
      },
      "HubMessageDtoBusMessageModel": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "nullable": true
          },
          "model": {
            "$ref": "#/components/schemas/HubMessageDto"
          }
        },
        "additionalProperties": false
      },
      "UserCertificateDto": {
        "type": "object",
        "properties": {
          "type": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "number": {
            "type": "string",
            "description": "Номер справки",
            "nullable": true
          },
          "dateIssue": {
            "type": "string",
            "description": "Дата выпуска",
            "format": "date-time"
          },
          "issuer": {
            "type": "string",
            "description": "Кем выдана справка",
            "nullable": true
          },
          "dateValidity": {
            "type": "string",
            "description": "Дата подтверждения",
            "format": "date-time"
          },
          "year": {
            "type": "string",
            "description": "Какой-то год",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Справки выданные пользователю"
      },
      "UserCertificateInputDto": {
        "type": "object",
        "properties": {
          "typeId": {
            "type": "integer",
            "description": "Тип справки",
            "format": "int64"
          },
          "number": {
            "type": "string",
            "description": "Номер справки",
            "nullable": true
          },
          "dateIssue": {
            "type": "string",
            "description": "Дата выпуска",
            "format": "date-time"
          },
          "issuer": {
            "type": "string",
            "description": "Кем выдана справка",
            "nullable": true
          },
          "dateValidity": {
            "type": "string",
            "description": "Дата подтверждения",
            "format": "date-time"
          },
          "year": {
            "type": "string",
            "description": "Какой-то год",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Справки выданные пользователю"
      },
      "UserCertificateDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserCertificateDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "UserDocumentDto": {
        "type": "object",
        "properties": {
          "isIdDocument": {
            "type": "boolean",
            "description": "Является ли подтверждающим личность"
          },
          "documentType": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "series": {
            "type": "string",
            "description": "Серия",
            "nullable": true
          },
          "number": {
            "type": "string",
            "description": "Номер",
            "nullable": true
          },
          "dateIssue": {
            "type": "string",
            "description": "Дата выдачи",
            "format": "date-time"
          },
          "issuer": {
            "type": "string",
            "description": "Кем выдан документ",
            "nullable": true
          },
          "departmentCode": {
            "type": "string",
            "description": "Код подразделения",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Документ"
      },
      "UserDocumentInputDto": {
        "type": "object",
        "properties": {
          "isIdDocument": {
            "type": "boolean",
            "description": "Является ли подтверждающим личность"
          },
          "documentTypeId": {
            "type": "integer",
            "description": "Тип документа",
            "format": "int64"
          },
          "series": {
            "type": "string",
            "description": "Серия",
            "nullable": true
          },
          "number": {
            "type": "string",
            "description": "Номер",
            "nullable": true
          },
          "dateIssue": {
            "type": "string",
            "description": "Дата выдачи",
            "format": "date-time"
          },
          "issuer": {
            "type": "string",
            "description": "Кем выдан документ",
            "nullable": true
          },
          "departmentCode": {
            "type": "string",
            "description": "Код подразделения",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Документ"
      },
      "UserDocumentDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserDocumentDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "UserEducationInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Имя",
            "nullable": true
          },
          "educationTypeId": {
            "type": "integer",
            "description": "Тип образования",
            "format": "int64"
          },
          "educationalInstitution": {
            "type": "string",
            "description": "Образовательное учреждение",
            "nullable": true
          },
          "specialty": {
            "type": "string",
            "description": "Специальность",
            "nullable": true
          },
          "educationDocumentTypeId": {
            "type": "integer",
            "description": "Тип документа об образовании",
            "format": "int64"
          },
          "series": {
            "type": "string",
            "description": "Серия",
            "nullable": true
          },
          "number": {
            "type": "string",
            "description": "Номер",
            "nullable": true
          },
          "issueDate": {
            "type": "string",
            "description": "Дата выдачи",
            "format": "date-time"
          },
          "qualification": {
            "type": "string",
            "description": "Квалификация",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала",
            "format": "date-time"
          },
          "endDate": {
            "type": "string",
            "description": "Дата окончания",
            "format": "date-time"
          },
          "courseName": {
            "type": "string",
            "description": "Название курса",
            "nullable": true
          },
          "additionalEducationTypeId": {
            "type": "integer",
            "description": "Тип дополнительного образования",
            "format": "int64",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Данные об образовании"
      },
      "UserEducationDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserEducationDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "UserEmailDto": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "description": "Email",
            "nullable": true
          },
          "isPrimary": {
            "type": "boolean",
            "description": "Признак основной email"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Email"
      },
      "UserEmailInputDto": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "email": {
            "type": "string",
            "description": "Email",
            "nullable": true
          },
          "isPrimary": {
            "type": "boolean",
            "description": "Основной email пользователя или нет"
          }
        },
        "additionalProperties": false,
        "description": "Контракт обновления email пользователя"
      },
      "UserEmailDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserEmailDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "UserExperienceInputDto": {
        "type": "object",
        "properties": {
          "experienceTypeId": {
            "type": "integer",
            "description": "Вид стажа",
            "format": "int64"
          },
          "daysNumber": {
            "type": "integer",
            "description": "Количество дней стажа",
            "format": "int64"
          },
          "monthNumber": {
            "type": "integer",
            "description": "Количество месяцев стажа",
            "format": "int64"
          },
          "startDate": {
            "type": "string",
            "description": "Дата начала отсчета стажа",
            "format": "date-time"
          },
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Опыт работы"
      },
      "UserExperienceDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserExperienceDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "UserNotificationType": {
        "enum": ["Default"],
        "type": "string",
        "description": "Тип пользовательского уведомления"
      },
      "EntityNotificationType": {
        "enum": ["VacationRequest", "StaffPickupRequest", "CommonRequest", "ActualizeDataRequest"],
        "type": "string",
        "description": "Тип уведомления"
      },
      "UserNotificationInputDto": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "description": "Идентфикатор пользователя",
            "format": "int64"
          },
          "title": {
            "type": "string",
            "description": "Заголовок уведомления",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание уведомления",
            "nullable": true
          },
          "notificationType": {
            "$ref": "#/components/schemas/UserNotificationType"
          },
          "entityId": {
            "type": "integer",
            "description": "Идентификатор сущности уведомления",
            "format": "int64",
            "nullable": true
          },
          "entityNotificationType": {
            "$ref": "#/components/schemas/EntityNotificationType"
          }
        },
        "additionalProperties": false,
        "description": "Контракт уведомление пользователя"
      },
      "UserNotificationDto": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "description": "Заголовок уведомления",
            "nullable": true
          },
          "description": {
            "type": "string",
            "description": "Описание уведомления",
            "nullable": true
          },
          "readed": {
            "type": "boolean",
            "description": "Признак прочтенности"
          },
          "createdAt": {
            "type": "string",
            "description": "Дата и время создания уведомления",
            "format": "date-time"
          },
          "entityId": {
            "type": "integer",
            "description": "Идентификатор сущности уведомления",
            "format": "int64",
            "nullable": true
          },
          "entityNotificationType": {
            "$ref": "#/components/schemas/EntityNotificationType"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Уведомление пользователя"
      },
      "UserNotificationTitleType": {
        "enum": ["NewTask", "NewComment", "Editing", "StatusChanging", "Deputy"],
        "type": "string",
        "description": "Темы уведомлений пользователя"
      },
      "UserNotificationSorting": {
        "enum": ["None", "CreateDate"],
        "type": "string",
        "description": "Набор полей по которым доступна сортировка в сущности Уведомление пользователя"
      },
      "UserNotificationDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserNotificationDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "UserNotificationUpdateInputDto": {
        "type": "object",
        "properties": {
          "ids": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Массив идентификаторов уведомлений",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Контракт помечать прочитанными / удалять уведомления"
      },
      "UserPhoneDto": {
        "type": "object",
        "properties": {
          "phone": {
            "type": "string",
            "description": "Телефон",
            "nullable": true
          },
          "isPrimary": {
            "type": "boolean",
            "description": "Признак основной телефон"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Телефон"
      },
      "UserPhoneInputDto": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "phone": {
            "type": "string",
            "description": "Телефон",
            "nullable": true
          },
          "isPrimary": {
            "type": "boolean",
            "description": "Основной телефон пользователя или нет"
          }
        },
        "additionalProperties": false,
        "description": "Контракт обновления телефона пользователя"
      },
      "UserPhoneDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserPhoneDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "NotificationType": {
        "enum": ["Push", "Email"],
        "type": "string"
      },
      "UserPreferencesDto": {
        "type": "object",
        "properties": {
          "notifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/NotificationType"
            },
            "description": "Виды предпочитаемых уведомлении",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Пользовательские настройки"
      },
      "UserPermission": {
        "enum": ["Administration"],
        "type": "string",
        "description": "Права доступа пользователя"
      },
      "CurrentUserDto": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "Идентификатор пользователя",
            "format": "int64"
          },
          "firstName": {
            "type": "string",
            "description": "Имя",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "description": "Фамилия",
            "nullable": true
          },
          "patronymic": {
            "type": "string",
            "description": "Отчество",
            "nullable": true
          },
          "roles": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DictionaryDto"
            },
            "description": "Роли пользователя",
            "nullable": true
          },
          "permissions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserPermission"
            },
            "description": "Права доступа пользователя",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "DTO легковесное данных текущего пользователя (с правами)"
      },
      "StaffStructureBaseDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наименование кадровой структуры",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "description": "Полное наименование кадровой структуры",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Базовый DTO для кадровой структуры"
      },
      "UserStaffDataDto": {
        "type": "object",
        "properties": {
          "organization": {
            "$ref": "#/components/schemas/OrganizationDto"
          },
          "staffStructure": {
            "$ref": "#/components/schemas/StaffStructureBaseDto"
          },
          "staffStructureObject": {
            "$ref": "#/components/schemas/StaffStructureObjectBaseDto"
          },
          "position": {
            "$ref": "#/components/schemas/PositionDto"
          },
          "employmentType": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "recruitmentDate": {
            "type": "string",
            "description": "Дата приема на работу",
            "format": "date-time"
          },
          "contractDate": {
            "type": "string",
            "description": "Дата заключения контракта",
            "format": "date-time"
          },
          "contractNumber": {
            "type": "string",
            "description": "Номер контракта (трудового договора)",
            "nullable": true
          },
          "staffStatus": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "staffStatusStartDate": {
            "type": "string",
            "description": "Дата начала текущего кадрового состояния",
            "format": "date-time"
          },
          "staffStatusEndDate": {
            "type": "string",
            "description": "Дата окончания текущего кадрового состояния",
            "format": "date-time"
          },
          "numberOfPositions": {
            "type": "integer",
            "description": "Количество занимаемых ставок",
            "format": "int64"
          },
          "directChief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "user": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "schedule": {
            "$ref": "#/components/schemas/WorkScheduleDto"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Информация о кадровом состоянии"
      },
      "UserDto": {
        "type": "object",
        "properties": {
          "mobilePhones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserPhoneDto"
            },
            "description": "Мобильные телефоны",
            "nullable": true
          },
          "emails": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserEmailDto"
            },
            "description": "Emails",
            "nullable": true
          },
          "birthday": {
            "type": "string",
            "description": "Дата рождения",
            "format": "date-time",
            "nullable": true
          },
          "snils": {
            "type": "string",
            "description": "СНИЛС",
            "nullable": true
          },
          "placeOfBirth": {
            "type": "string",
            "description": "Место рождения",
            "nullable": true
          },
          "inn": {
            "type": "string",
            "description": "ИНН (Идентификационный номер налогоплательщика) организации",
            "nullable": true
          },
          "classGrade": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserDocumentDto"
            },
            "description": "Список документов",
            "nullable": true
          },
          "certificates": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserCertificateDto"
            },
            "description": "Список сертификатов",
            "nullable": true
          },
          "staffData": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserStaffDataDto"
            },
            "description": "Информация о текущем кадровом состоянии сотрудника (работа в организациях, положение в их кадровых структурах и т.д.)",
            "nullable": true
          },
          "resultsOfLearning": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ResultOfLearningDto"
            },
            "description": "Информация о пройденных курсах",
            "nullable": true
          },
          "education": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserEducationDto"
            },
            "description": "Информация об образовании",
            "nullable": true
          },
          "experience": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserExperienceDto"
            },
            "description": "Информация о стаже",
            "nullable": true
          },
          "absenceData": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AbsenceInfoDto"
            },
            "description": "Данные об отсутствии",
            "nullable": true
          },
          "firstName": {
            "type": "string",
            "description": "Имя",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "description": "Фамилия",
            "nullable": true
          },
          "patronymic": {
            "type": "string",
            "description": "Отчество",
            "nullable": true
          },
          "gender": {
            "$ref": "#/components/schemas/UserGender"
          },
          "photos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserPhotoDto"
            },
            "description": "Cсылки на место расположения фотографий",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "DTO данных пользователя"
      },
      "UserDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "UserDetailsDto": {
        "type": "object",
        "properties": {
          "attachments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserAttachmentDto"
            },
            "description": "Cсылки на место расположения вложений",
            "nullable": true
          },
          "mobilePhones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserPhoneDto"
            },
            "description": "Мобильные телефоны",
            "nullable": true
          },
          "emails": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserEmailDto"
            },
            "description": "Emails",
            "nullable": true
          },
          "birthday": {
            "type": "string",
            "description": "Дата рождения",
            "format": "date-time",
            "nullable": true
          },
          "snils": {
            "type": "string",
            "description": "СНИЛС",
            "nullable": true
          },
          "placeOfBirth": {
            "type": "string",
            "description": "Место рождения",
            "nullable": true
          },
          "inn": {
            "type": "string",
            "description": "ИНН (Идентификационный номер налогоплательщика) организации",
            "nullable": true
          },
          "classGrade": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserDocumentDto"
            },
            "description": "Список документов",
            "nullable": true
          },
          "certificates": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserCertificateDto"
            },
            "description": "Список сертификатов",
            "nullable": true
          },
          "staffData": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserStaffDataDto"
            },
            "description": "Информация о текущем кадровом состоянии сотрудника (работа в организациях, положение в их кадровых структурах и т.д.)",
            "nullable": true
          },
          "resultsOfLearning": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ResultOfLearningDto"
            },
            "description": "Информация о пройденных курсах",
            "nullable": true
          },
          "education": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserEducationDto"
            },
            "description": "Информация об образовании",
            "nullable": true
          },
          "experience": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserExperienceDto"
            },
            "description": "Информация о стаже",
            "nullable": true
          },
          "absenceData": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AbsenceInfoDto"
            },
            "description": "Данные об отсутствии",
            "nullable": true
          },
          "firstName": {
            "type": "string",
            "description": "Имя",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "description": "Фамилия",
            "nullable": true
          },
          "patronymic": {
            "type": "string",
            "description": "Отчество",
            "nullable": true
          },
          "gender": {
            "$ref": "#/components/schemas/UserGender"
          },
          "photos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserPhotoDto"
            },
            "description": "Cсылки на место расположения фотографий",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Детальный DTO пользователя"
      },
      "UserSubordinationStructureDto": {
        "type": "object",
        "properties": {
          "structure": {
            "$ref": "#/components/schemas/StaffStructureBaseDto"
          },
          "type": {
            "$ref": "#/components/schemas/StaffStructureTypeDto"
          },
          "structureObjectId": {
            "type": "integer",
            "description": "Идентификатор кадрового объекта",
            "format": "int64",
            "nullable": true
          },
          "statusType": {
            "$ref": "#/components/schemas/DictionaryDto"
          },
          "position": {
            "type": "string",
            "description": "Занимаемая сотрудником должность",
            "nullable": true
          },
          "chief": {
            "$ref": "#/components/schemas/UserBaseDto"
          },
          "chiefPosition": {
            "type": "string",
            "description": "Занимаемая руководителем должность",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Контракт подчиненная структура пользователя"
      },
      "UserStaffDataInputDto": {
        "type": "object",
        "properties": {
          "organizationId": {
            "type": "integer",
            "description": "Организация",
            "format": "int64",
            "nullable": true
          },
          "staffStructureId": {
            "type": "integer",
            "description": "Кадровая структура",
            "format": "int64",
            "nullable": true
          },
          "staffStructureObjectId": {
            "type": "integer",
            "description": "Кадровый объект",
            "format": "int64",
            "nullable": true
          },
          "positionId": {
            "type": "integer",
            "description": "Должность",
            "format": "int64"
          },
          "employmentTypeId": {
            "type": "integer",
            "description": "Уникальный идентификатор вида занятости",
            "format": "int64"
          },
          "recruitmentDate": {
            "type": "string",
            "description": "Дата приема на работу",
            "format": "date-time"
          },
          "contractDate": {
            "type": "string",
            "description": "Дата заключения контракта",
            "format": "date-time"
          },
          "contractNumber": {
            "type": "string",
            "description": "Номер контракта (трудового договора)",
            "nullable": true
          },
          "staffStatusId": {
            "type": "integer",
            "description": "Текущий вид кадрового состояния",
            "format": "int64"
          },
          "staffStatusStartDate": {
            "type": "string",
            "description": "Дата начала текущего кадрового состояния",
            "format": "date-time"
          },
          "staffStatusEndDate": {
            "type": "string",
            "description": "Дата окончания текущего кадрового состояния",
            "format": "date-time"
          },
          "numberOfPositions": {
            "type": "integer",
            "description": "Количество занимаемых ставок",
            "format": "int64"
          },
          "directChiefId": {
            "type": "integer",
            "description": "Непосредственный руководитель",
            "format": "int64"
          },
          "userId": {
            "type": "integer",
            "description": "Пользователь",
            "format": "int64"
          },
          "scheduleId": {
            "type": "integer",
            "description": "Расписание",
            "format": "int64"
          },
          "id": {
            "type": "integer",
            "description": "Идентификатор",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Информация о кадровом состоянии"
      },
      "UserStaffDataDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserStaffDataDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      },
      "WorkScheduleInputDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Наимнование рабочего расписания",
            "nullable": true
          },
          "summaryOfWorkingHours": {
            "type": "boolean",
            "description": "Количество рабочих часов"
          },
          "durationOfWorkingWeek": {
            "type": "integer",
            "description": "Продолжительность рабочей недели",
            "format": "int64"
          }
        },
        "additionalProperties": false,
        "description": "Контракт данных на изменение рабочего расписания"
      },
      "WorkScheduleDtoPagedResponseDto": {
        "type": "object",
        "properties": {
          "totalPages": {
            "type": "integer",
            "description": "Общее число страниц",
            "format": "int32",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/WorkScheduleDto"
            },
            "description": "Массив даннных",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Ответ с постраничной разбивкой"
      }
    },
    "securitySchemes": {
      "oauth2": {
        "type": "oauth2",
        "flows": {
          "implicit": {
            "authorizationUrl": "/ks/auth/login?returnUrl=/",
            "scopes": {}
          }
        }
      }
    }
  },
  "tags": [{
    "name": "CalendarHolidays",
    "description": "Контроллер праздничных и выходных дней производственного календаря"
  }, {
    "name": "Candidate",
    "description": "Карточка кандидата"
  }, {
    "name": "CandidateStage",
    "description": "Этапы работы с кандидатом"
  }, {
    "name": "Import",
    "description": "Импорт xlsx файлов"
  }, {
    "name": "Kanban",
    "description": "Контроллер работы с доской"
  }, {
    "name": "ManagerialPositions",
    "description": "Контроллер по работе с карточками позиций"
  }, {
    "name": "Mayor",
    "description": "Мэр"
  }, {
    "name": "Organizations",
    "description": "Организации с данными руководителя"
  }, {
    "name": "PositionCard",
    "description": "Контроллер по работе с карточками должности"
  }, {
    "name": "Positions",
    "description": "Справочник должностей"
  }, {
    "name": "RootStructure",
    "description": "Контроллер для получения основной структуры с мэром, комплексами и структурами"
  }, {
    "name": "Search",
    "description": "Контроллер поиска"
  }, {
    "name": "StaffStructureProjectComments",
    "description": "Комментарии к карточкам проектов структур"
  }, {
    "name": "StaffStructureProject",
    "description": "Контроллер для работы с карточкой проекта структуры"
  }, {
    "name": "StageStatuses",
    "description": "Статусы этапов"
  }, {
    "name": "Subdivisions",
    "description": "Подразделения"
  }, {
    "name": "TaskComments",
    "description": "Комментарии задач"
  }, {
    "name": "Task",
    "description": "Задачи"
  }, {
    "name": "TaskWatchers",
    "description": "Наблюдатели задач"
  }, {
    "name": "TestBusMessage",
    "description": "Контроллер для отправки на фронт тестовых уведомлений"
  }, {
    "name": "UserNotifications",
    "description": "Контроллер уведомлений пользователя"
  }, {
    "name": "Users",
    "description": "Пользователи"
  }, {
    "name": "AbsenceInfo",
    "description": "Плановые отсутствия сотрудников"
  }, {
    "name": "Attachments",
    "description": "Вложения"
  }, {
    "name": "Competences",
    "description": "Компетенции"
  }, {
    "name": "Complexes",
    "description": "Комплексы с ФИО, фото, полом руководителя"
  }, {
    "name": "Dictionaries",
    "description": "Справочники"
  }, {
    "name": "JobPositions",
    "description": "Должности с признаком государственности"
  }, {
    "name": "ResultsOfLearning",
    "description": "Результаты обучения сотрудника"
  }, {
    "name": "StaffObjects",
    "description": "Кадровые объекты, определяют положение должностей, подразделений, организаций в структуре"
  }, {
    "name": "StaffStructures",
    "description": "Кадровые структуры"
  }, {
    "name": "StructureKinds",
    "description": "Разновидности структур"
  }, {
    "name": "StructureType",
    "description": "Тип кадровой структуры в системе кадрового сервиса"
  }, {
    "name": "Subordinates",
    "description": "Кадровые структуры деревом"
  }, {
    "name": "UserCertificates",
    "description": "Справки сотрудника"
  }, {
    "name": "UserDocuments",
    "description": "Документы сотрудника"
  }, {
    "name": "UserEducation",
    "description": "Информация об образовании сотрудника"
  }, {
    "name": "UserEmails",
    "description": "Адреса электронной почты сотрудника"
  }, {
    "name": "UserExperience",
    "description": "Информация о стаже сотрудника"
  }, {
    "name": "UserPhones",
    "description": "Телефоны сотрудника"
  }, {
    "name": "UserStaffData",
    "description": "Текущие кадровые состояния сотрудника"
  }, {
    "name": "WorkSchedules",
    "description": "График работы сотрудника"
  }]
};
},{}],"swaggerXML/swaggerXml.tsx":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // @ts-ignore

var test = __importStar(require("./swagger.json"));

var getXML = function getXML() {
  // @ts-ignore
  var keys = Object.entries(test.components.schemas);
  var data = keys.map(function (item) {
    return {
      type: item[1].hasOwnProperty('enum') ? 'enum' : 'DTO',
      name: item[0],
      props: item[1].properties || item[1].enum,
      desc: item[1].description
    };
  });
  var DTOs = data.filter(function (item) {
    return item.type === 'DTO';
  });
  var Enums = data.filter(function (item) {
    return item.type === 'enum';
  });
  console.log(DTOs);

  var getXML_DTO = function getXML_DTO() {
    DTOs.map(function (dto) {
      var container = "<mxCell></mxCell>";
    });
  };
};

getXML();
},{"./swagger.json":"swaggerXML/swagger.json"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62914" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","swaggerXML/swaggerXml.tsx"], null)
//# sourceMappingURL=/swaggerXml.33193569.js.map