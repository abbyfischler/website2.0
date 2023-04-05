// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2xivTvVc9MkGADdnVfMAFY
// Component: OFCea_mty2_t

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  useDependencyAwareQuery
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button2 from "../../Button2"; // plasmic-import: FipYJuf5U-D/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: CFzWoZH4Bb/codeComponent

import { useScreenVariants as useScreenVariantskkI7Czpb2V5B } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: kkI7CZPB_2v5b/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_personalwebsite.module.css"; // plasmic-import: 2xivTvVc9MkGADdnVfMAFY/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: OFCea_mty2_t/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 4-RVTEc0tRK/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: VBswn19fuWS/icon
import Instagram167SvgrepoComsvgIcon from "./icons/PlasmicIcon__Instagram167SvgrepoComsvg"; // plasmic-import: Y2csnVLFcF/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: CNLcyUKvGKf/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: zq028r8qULc/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  name?: p.Flex<"div">;
  name2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  mission?: p.Flex<"div">;
  theShitIDoPic?: p.Flex<"div">;
  moreInfo?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  button2?: p.Flex<typeof Button2>;
  h4?: p.Flex<"h4">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskkI7Czpb2V5B()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"name"}
          data-plasmic-override={overrides.name}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.name
          )}
        >
          <div
            data-plasmic-name={"name2"}
            data-plasmic-override={overrides.name2}
            className={classNames(projectcss.all, sty.name2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fH039
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FF12B3" }}
                      >
                        {"Abby  Fischler"}
                      </span>
                    </React.Fragment>
                  </h1>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__pp9TP)}>
            <div
              data-plasmic-name={"mission"}
              data-plasmic-override={overrides.mission}
              className={classNames(projectcss.all, sty.mission)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k2ZHf
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#000000" }}
                  >
                    {
                      "I’m passionate about computer science and business. The power of data and transforming information is top of my mind, especially how it can be stored, organized, used, and shared in a variety of contexts. "
                    }
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
          <p.Stack
            as={"div"}
            data-plasmic-name={"theShitIDoPic"}
            data-plasmic-override={overrides.theShitIDoPic}
            hasGap={true}
            className={classNames(projectcss.all, sty.theShitIDoPic)}
          >
            <div className={classNames(projectcss.all, sty.columns__qsmo)}>
              <div className={classNames(projectcss.all, sty.column__fICr)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__v9Bvy)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__v9O7L)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"92px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/personalwebsite/images/gball.png",
                        fullWidth: 1024,
                        fullHeight: 1024,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iyE
                  )}
                >
                  {
                    "I'm a junior at Geffen Academy at UCLA. I'm the president of my school's National Honor's Society and am on the Girls Varsity Soccer Team. I’m also a member of Girls Who Code and the knitting club."
                  }
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column___7IoL)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__d7Ek)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__fCbjJ)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"92px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/personalwebsite/images/iconRoundedpng.png",
                        fullWidth: 512,
                        fullHeight: 512,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qufud
                  )}
                >
                  {
                    "Hack Club is one of the largest nonprofit coding organizations for high schoolers around the world. I am a Junior Administrative Engineer reporting to Christina Asquith. I’m grateful to be apart of their programs and work for them.  "
                  }
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns___8QSi)}>
              <div className={classNames(projectcss.all, sty.column__k7JR)}>
                <div className={classNames(projectcss.all, sty.columns__kvBL)}>
                  <div
                    className={classNames(projectcss.all, sty.column__mtuKg)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__gWmz6)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"92px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/personalwebsite/images/screenshot20230405At15114PMpng.png",
                        fullWidth: 930,
                        fullHeight: 908,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uqm55
                      )}
                    >
                      {
                        "The UCLA Jonsson Cancer Center is one of the leading cancer research institution's in the nation. For the past 2 years I have been a UCLA Jonsson Cancer Center Foundation Learning Board Member,"
                      }
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__htsgc)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__dxE8R)}
                      displayHeight={"323px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/personalwebsite/images/_253A3489Jpg.jpg",
                        fullWidth: 3648,
                        fullHeight: 5472,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </p.Stack>
          <div
            data-plasmic-name={"moreInfo"}
            data-plasmic-override={overrides.moreInfo}
            className={classNames(projectcss.all, sty.moreInfo)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uqvIx
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    " I am a 2021, 2022, and 2023 Los Angeles Affiliate Honorable Mention for the NCWIT Award for Aspirations in Computing (AiC). I was a 2020, 2021 and 2022 "
                  }
                </React.Fragment>
                {
                  <p.PlasmicLink
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link
                    )}
                    component={Link}
                    href={"https://www.kodewithklossy.com/" as const}
                    platform={"nextjs"}
                  >
                    {"Kode with Klossy "}
                  </p.PlasmicLink>
                }
                <React.Fragment>
                  {
                    "scholar and am a big fan of their programs. I also am a board member of the UCLA Jonsson Cancer Center Foundation Learning Board. I love all things technology. I'm an ambassador for Bit by Bit and Generation She."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uAqaW)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__v2Yig)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__anCDt
                )}
              >
                {"Let's connect."}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__okmh6
                )}
              >
                {
                  "I’m available and eager to work on contract work / special projects.  Please email me to set up a call."
                }
              </div>
              <Button2
                data-plasmic-name={"button2"}
                data-plasmic-override={overrides.button2}
                className={classNames("__wab_instance", sty.button2)}
                endIcon={
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg___3T7Mf)}
                    role={"img"}
                  />
                }
                link={"mailto:abigail.fischler@gmail.com" as const}
                onClick={async event => {
                  const $steps = {};
                  $steps["setVariable"] = true
                    ? (() => {
                        const actionArgs = {};
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariable",
                            interactionUuid: "kqUS3azm6",
                            componentUuid: "OFCea_mty2_t"
                          },
                          () =>
                            (({ variable, value, startIndex, deleteCount }) => {
                              const { objRoot, variablePath } = variable;
                              undefined;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["setVariable"] === "object" &&
                    typeof $steps["setVariable"].then === "function"
                  ) {
                    $steps["setVariable"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariable",
                        interactionUuid: "kqUS3azm6",
                        componentUuid: "OFCea_mty2_t"
                      },
                      $steps["setVariable"]
                    );
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__jxGlx)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__j9Q2
                  )}
                >
                  {"Email me💌"}
                </div>
              </Button2>
            </p.Stack>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__owxDt)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__h75Ir)}
            >
              <div className={classNames(projectcss.all, sty.column__d7Ez)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__hy5A7)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xqKrf)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9V84V
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        {
                          <h4
                            data-plasmic-name={"h4"}
                            data-plasmic-override={overrides.h4}
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              projectcss.__wab_text,
                              sty.h4
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#FC25B7" }}
                              >
                                {"My socials:"}
                              </span>
                            </React.Fragment>
                          </h4>
                        }
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </div>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__djqLb)}
                    >
                      <Instagram167SvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__w3AbK)}
                        onClick={async event => {
                          const $steps = {};
                          $steps["goToPage"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "navigation",
                                      interactionUuid: "IBHrhl_ja",
                                      componentUuid: "OFCea_mty2_t",
                                      argName: "destination"
                                    },
                                    () =>
                                      "https://www.instagram.com/abby_fischler/"
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "navigation",
                                    interactionUuid: "IBHrhl_ja",
                                    componentUuid: "OFCea_mty2_t"
                                  },
                                  () =>
                                    (({ destination }) => {
                                      __nextRouter?.push(destination);
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["goToPage"] === "object" &&
                            typeof $steps["goToPage"].then === "function"
                          ) {
                            $steps["goToPage"] = await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "navigation",
                                interactionUuid: "IBHrhl_ja",
                                componentUuid: "OFCea_mty2_t"
                              },
                              $steps["goToPage"]
                            );
                          }
                        }}
                        role={"img"}
                      />

                      <Icon2Icon
                        className={classNames(projectcss.all, sty.svg__tsKEe)}
                        onClick={async event => {
                          const $steps = {};
                          $steps["goToPage"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "navigation",
                                      interactionUuid: "zvP76jIzS",
                                      componentUuid: "OFCea_mty2_t",
                                      argName: "destination"
                                    },
                                    () => "https://github.com/abbyfischler"
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "navigation",
                                    interactionUuid: "zvP76jIzS",
                                    componentUuid: "OFCea_mty2_t"
                                  },
                                  () =>
                                    (({ destination }) => {
                                      __nextRouter?.push(destination);
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["goToPage"] === "object" &&
                            typeof $steps["goToPage"].then === "function"
                          ) {
                            $steps["goToPage"] = await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "navigation",
                                interactionUuid: "zvP76jIzS",
                                componentUuid: "OFCea_mty2_t"
                              },
                              $steps["goToPage"]
                            );
                          }
                        }}
                        role={"img"}
                      />

                      <Icon28Icon
                        className={classNames(projectcss.all, sty.svg__ql402)}
                        onClick={async event => {
                          const $steps = {};
                          $steps["goToPage"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "navigation",
                                      interactionUuid: "JmrL-Cb0V",
                                      componentUuid: "OFCea_mty2_t",
                                      argName: "destination"
                                    },
                                    () =>
                                      "https://www.linkedin.com/in/abby-fischler-27a90324a/"
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "navigation",
                                    interactionUuid: "JmrL-Cb0V",
                                    componentUuid: "OFCea_mty2_t"
                                  },
                                  () =>
                                    (({ destination }) => {
                                      __nextRouter?.push(destination);
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["goToPage"] === "object" &&
                            typeof $steps["goToPage"].then === "function"
                          ) {
                            $steps["goToPage"] = await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "navigation",
                                interactionUuid: "JmrL-Cb0V",
                                componentUuid: "OFCea_mty2_t"
                              },
                              $steps["goToPage"]
                            );
                          }
                        }}
                        role={"img"}
                      />
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              </div>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  name: [
    "name",
    "name2",
    "h1",
    "mission",
    "theShitIDoPic",
    "moreInfo",
    "link",
    "button2",
    "h4"
  ],
  name2: ["name2", "h1"],
  h1: ["h1"],
  mission: ["mission"],
  theShitIDoPic: ["theShitIDoPic"],
  moreInfo: ["moreInfo", "link"],
  link: ["link"],
  button2: ["button2"],
  h4: ["h4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  name: "div";
  name2: "div";
  h1: "h1";
  mission: "div";
  theShitIDoPic: "div";
  moreInfo: "div";
  link: "a";
  button2: typeof Button2;
  h4: "h4";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "name") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("name"),
  {
    // Helper components rendering sub-elements
    name2: makeNodeComponent("name2"),
    h1: makeNodeComponent("h1"),
    mission: makeNodeComponent("mission"),
    theShitIDoPic: makeNodeComponent("theShitIDoPic"),
    moreInfo: makeNodeComponent("moreInfo"),
    link: makeNodeComponent("link"),
    button2: makeNodeComponent("button2"),
    h4: makeNodeComponent("h4"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Abby Fischler",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
