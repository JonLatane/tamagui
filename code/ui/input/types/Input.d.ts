import React from 'react';
import type { InputModeOptions } from 'react-native';
/**
 * @summary An input is a text field that allows users to enter text.
 * @see — Docs https://tamagui.dev/ui/inputs#input
 */
export declare const Input: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}>, "focusable" | "media" | "color" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "onStartShouldSetResponder" | "onLayout" | "href" | "rel" | "download" | "dir" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "lineBreakStrategyIOS" | "selectionColor" | "textBreakStrategy" | "textAlign" | "textAlignVertical" | "summary" | "list" | "max" | "min" | "form" | "cite" | "data" | "label" | "slot" | "span" | "title" | "wrap" | "hidden" | "default" | "open" | "name" | "key" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "dateTime" | "defer" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "high" | "hrefLang" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "maxLength" | "mediaGroup" | "method" | "minLength" | "multiple" | "muted" | "noValidate" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "step" | "type" | "useMap" | "value" | "wmode" | keyof import("@tamagui/core").StackStyleBase | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> | "ref" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoCapitalize" | "autoFocus" | "contentEditable" | "contextMenu" | "draggable" | "enterKeyHint" | "lang" | "nonce" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "rev" | "typeof" | "vocab" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-dropeffect" | "aria-errormessage" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-invalid" | "aria-keyshortcuts" | "aria-level" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-setsize" | "aria-sort" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancelCapture" | "onTouchMoveCapture" | "onTouchStartCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "secureTextEntry" | "onChangeText" | "editable" | "keyboardType" | "placeholderTextColor" | "blurOnSubmit" | "submitBehavior" | "caretHidden" | "contextMenuHidden" | "multiline" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "returnKeyType" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "textContentType" | "scrollEnabled" | "smartInsertDelete" | "cursorColor" | "selectionHandleColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus"> & import("@tamagui/core").StackNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & Omit<React.ClassAttributes<HTMLInputElement> & React.HTMLProps<HTMLInputElement>, "size" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "value" | keyof import("@tamagui/core").StackStyleBase | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Pick<import("@tamagui/core").TextProps, "color"> & Omit<React.CSSProperties | undefined, "color"> & Omit<import("react-native").TextInputProps, "numberOfLines" | "selectionColor" | "enterKeyHint" | "inputMode" | "secureTextEntry" | "onChangeText" | "editable" | "keyboardType" | "placeholderTextColor"> & {
    secureTextEntry?: import("react-native").TextInputProps["secureTextEntry"];
    onChangeText?: import("react-native").TextInputProps["onChange"];
    editable?: import("react-native").TextInputProps["editable"];
    enterKeyHint?: "done" | "go" | "next" | "search" | "send" | "enter" | "previous";
    keyboardType?: import("react-native").TextInputProps["keyboardType"];
    inputMode?: InputModeOptions;
    placeholderTextColor?: import("@tamagui/core").ColorTokens;
    selectionColor?: import("@tamagui/core").ColorTokens;
    tag?: import("@tamagui/core").TamaguiComponentPropsBase["tag"];
    multiline?: boolean;
    numberOfLines?: number;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").StackNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & Omit<React.ClassAttributes<HTMLInputElement> & React.HTMLProps<HTMLInputElement>, "size" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "value" | keyof import("@tamagui/core").StackStyleBase | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Pick<import("@tamagui/core").TextProps, "color"> & Omit<React.CSSProperties | undefined, "color"> & Omit<import("react-native").TextInputProps, "numberOfLines" | "selectionColor" | "enterKeyHint" | "inputMode" | "secureTextEntry" | "onChangeText" | "editable" | "keyboardType" | "placeholderTextColor"> & {
    secureTextEntry?: import("react-native").TextInputProps["secureTextEntry"];
    onChangeText?: import("react-native").TextInputProps["onChange"];
    editable?: import("react-native").TextInputProps["editable"];
    enterKeyHint?: "done" | "go" | "next" | "search" | "send" | "enter" | "previous";
    keyboardType?: import("react-native").TextInputProps["keyboardType"];
    inputMode?: InputModeOptions;
    placeholderTextColor?: import("@tamagui/core").ColorTokens;
    selectionColor?: import("@tamagui/core").ColorTokens;
    tag?: import("@tamagui/core").TamaguiComponentPropsBase["tag"];
    multiline?: boolean;
    numberOfLines?: number;
}, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    name: string;
    tag: string;
    variants: {
        readonly unstyled: {
            readonly false: {
                readonly borderColor: "$borderColor";
                readonly backgroundColor: "$background";
                readonly minWidth: 0;
                readonly hoverStyle: {
                    readonly borderColor: "$borderColorHover";
                };
                readonly focusStyle: {
                    readonly borderColor: "$borderColorFocus";
                };
                readonly focusVisibleStyle: {
                    readonly outlineColor: "$outlineColor";
                    readonly outlineWidth: 2;
                    readonly outlineStyle: "solid";
                };
                readonly tabIndex: 0;
                readonly size: "$true";
                readonly fontFamily: "$body";
                readonly borderWidth: 1;
                readonly outlineWidth: 0;
                readonly color: "$color";
            } | {
                readonly borderColor: "$borderColor";
                readonly backgroundColor: "$background";
                readonly minWidth: 0;
                readonly hoverStyle: {
                    readonly borderColor: "$borderColorHover";
                };
                readonly focusStyle: {
                    readonly borderColor: "$borderColorFocus";
                };
                readonly focusVisibleStyle: {
                    readonly outlineColor: "$outlineColor";
                    readonly outlineWidth: 2;
                    readonly outlineStyle: "solid";
                };
                readonly focusable: boolean;
                readonly size: "$true";
                readonly fontFamily: "$body";
                readonly borderWidth: 1;
                readonly outlineWidth: 0;
                readonly color: "$color";
            };
        };
        readonly size: {
            readonly '...size': import("@tamagui/core").SizeVariantSpreadFunction<any>;
        };
        readonly disabled: {
            readonly true: {};
        };
    };
    defaultVariants: {
        unstyled: boolean;
    };
    isInput?: undefined;
    accept?: undefined;
    validStyles?: undefined;
} | {
    isInput: boolean;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
    validStyles: {
        whiteSpace?: boolean | undefined;
        wordWrap?: boolean | undefined;
        textOverflow?: boolean | undefined;
        textDecorationDistance?: boolean | undefined;
        cursor?: boolean | undefined;
        WebkitLineClamp: boolean;
        WebkitBoxOrient?: boolean | undefined;
        textShadowOffset: boolean;
        textShadowRadius: boolean;
        userSelect: boolean;
        selectable: boolean;
        verticalAlign: boolean;
        color: boolean;
        textDecorationColor: boolean;
        textShadowColor: boolean;
        textAlign: boolean;
        textDecorationLine: boolean;
        textDecorationStyle: boolean;
        fontFamily: boolean;
        fontSize: boolean;
        fontStyle: boolean;
        fontWeight: boolean;
        fontVariant: boolean;
        letterSpacing: boolean;
        lineHeight: boolean;
        textTransform: boolean;
        elevationAndroid?: boolean | undefined;
        transition?: boolean | undefined;
        textWrap?: boolean | undefined;
        backdropFilter?: boolean | undefined;
        background?: boolean | undefined;
        backgroundAttachment?: boolean | undefined;
        backgroundBlendMode?: boolean | undefined;
        backgroundClip?: boolean | undefined;
        backgroundColor: boolean;
        backgroundImage?: boolean | undefined;
        backgroundOrigin?: boolean | undefined;
        backgroundPosition?: boolean | undefined;
        backgroundRepeat?: boolean | undefined;
        backgroundSize?: boolean | undefined;
        borderBottomStyle?: boolean | undefined;
        borderImage?: boolean | undefined;
        borderLeftStyle?: boolean | undefined;
        borderRightStyle?: boolean | undefined;
        borderTopStyle?: boolean | undefined;
        boxSizing?: boolean | undefined;
        caretColor?: boolean | undefined;
        clipPath?: boolean | undefined;
        contain?: boolean | undefined;
        containerType?: boolean | undefined;
        content?: boolean | undefined;
        float?: boolean | undefined;
        mask?: boolean | undefined;
        maskBorder?: boolean | undefined;
        maskBorderMode?: boolean | undefined;
        maskBorderOutset?: boolean | undefined;
        maskBorderRepeat?: boolean | undefined;
        maskBorderSlice?: boolean | undefined;
        maskBorderSource?: boolean | undefined;
        maskBorderWidth?: boolean | undefined;
        maskClip?: boolean | undefined;
        maskComposite?: boolean | undefined;
        maskImage?: boolean | undefined;
        maskMode?: boolean | undefined;
        maskOrigin?: boolean | undefined;
        maskPosition?: boolean | undefined;
        maskRepeat?: boolean | undefined;
        maskSize?: boolean | undefined;
        maskType?: boolean | undefined;
        mixBlendMode?: boolean | undefined;
        objectFit?: boolean | undefined;
        objectPosition?: boolean | undefined;
        outlineOffset?: boolean | undefined;
        outlineStyle?: boolean | undefined;
        outlineWidth?: boolean | undefined;
        overflowBlock?: boolean | undefined;
        overflowInline?: boolean | undefined;
        overflowX?: boolean | undefined;
        overflowY?: boolean | undefined;
        pointerEvents?: boolean | undefined;
        scrollbarWidth?: boolean | undefined;
        textEmphasis?: boolean | undefined;
        touchAction?: boolean | undefined;
        transformStyle?: boolean | undefined;
        boxShadow: boolean;
        filter: boolean;
        perspective: boolean;
        animationIterationCount: boolean;
        aspectRatio: boolean;
        borderImageOutset: boolean;
        borderImageSlice: boolean;
        borderImageWidth: boolean;
        columnCount: boolean;
        flex: boolean;
        flexGrow: boolean;
        flexOrder: boolean;
        flexPositive: boolean;
        flexShrink: boolean;
        flexNegative: boolean;
        gridRow: boolean;
        gridRowEnd: boolean;
        gridRowGap: boolean;
        gridRowStart: boolean;
        gridColumn: boolean;
        gridColumnEnd: boolean;
        gridColumnGap: boolean;
        gridColumnStart: boolean;
        gridTemplateColumns: boolean;
        gridTemplateAreas: boolean;
        lineClamp: boolean;
        opacity: boolean;
        order: boolean;
        orphans: boolean;
        tabSize: boolean;
        widows: boolean;
        zIndex: boolean;
        zoom: boolean;
        scale: boolean;
        scaleX: boolean;
        scaleY: boolean;
        scaleZ: boolean;
        shadowOpacity: boolean;
        x: boolean;
        y: boolean;
        skewX: boolean;
        skewY: boolean;
        matrix: boolean;
        rotate: boolean;
        rotateY: boolean;
        rotateX: boolean;
        rotateZ: boolean;
        borderRadius: boolean;
        borderTopLeftRadius: boolean;
        borderTopRightRadius: boolean;
        borderBottomLeftRadius: boolean;
        borderBottomRightRadius: boolean;
        borderStartStartRadius: boolean;
        borderStartEndRadius: boolean;
        borderEndStartRadius: boolean;
        borderEndEndRadius: boolean;
        width: boolean;
        height: boolean;
        minWidth: boolean;
        minHeight: boolean;
        maxWidth: boolean;
        maxHeight: boolean;
        blockSize: boolean;
        minBlockSize: boolean;
        maxBlockSize: boolean;
        inlineSize: boolean;
        minInlineSize: boolean;
        maxInlineSize: boolean;
        outlineColor?: boolean | undefined;
        borderColor: boolean;
        borderBlockStartColor: boolean;
        borderBlockEndColor: boolean;
        borderBlockColor: boolean;
        borderBottomColor: boolean;
        borderInlineColor: boolean;
        borderInlineStartColor: boolean;
        borderInlineEndColor: boolean;
        borderTopColor: boolean;
        borderLeftColor: boolean;
        borderRightColor: boolean;
        borderEndColor: boolean;
        borderStartColor: boolean;
        shadowColor: boolean;
        backfaceVisibility: boolean;
        borderBottomEndRadius: boolean;
        borderBottomStartRadius: boolean;
        borderBottomWidth: boolean;
        borderLeftWidth: boolean;
        borderRightWidth: boolean;
        borderBlockWidth: boolean;
        borderBlockEndWidth: boolean;
        borderBlockStartWidth: boolean;
        borderInlineWidth: boolean;
        borderInlineEndWidth: boolean;
        borderInlineStartWidth: boolean;
        borderStyle: boolean;
        borderBlockStyle: boolean;
        borderBlockEndStyle: boolean;
        borderBlockStartStyle: boolean;
        borderInlineStyle: boolean;
        borderInlineEndStyle: boolean;
        borderInlineStartStyle: boolean;
        borderTopEndRadius: boolean;
        borderTopStartRadius: boolean;
        borderTopWidth: boolean;
        borderWidth: boolean;
        transform: boolean;
        transformOrigin: boolean;
        alignContent: boolean;
        alignItems: boolean;
        alignSelf: boolean;
        borderEndWidth: boolean;
        borderStartWidth: boolean;
        bottom: boolean;
        display: boolean;
        end: boolean;
        flexBasis: boolean;
        flexDirection: boolean;
        flexWrap: boolean;
        gap: boolean;
        columnGap: boolean;
        rowGap: boolean;
        justifyContent: boolean;
        left: boolean;
        margin: boolean;
        marginBlock: boolean;
        marginBlockEnd: boolean;
        marginBlockStart: boolean;
        marginInline: boolean;
        marginInlineStart: boolean;
        marginInlineEnd: boolean;
        marginBottom: boolean;
        marginEnd: boolean;
        marginHorizontal: boolean;
        marginLeft: boolean;
        marginRight: boolean;
        marginStart: boolean;
        marginTop: boolean;
        marginVertical: boolean;
        overflow: boolean;
        padding: boolean;
        paddingBottom: boolean;
        paddingInline: boolean;
        paddingBlock: boolean;
        paddingBlockStart: boolean;
        paddingInlineEnd: boolean;
        paddingInlineStart: boolean;
        paddingEnd: boolean;
        paddingHorizontal: boolean;
        paddingLeft: boolean;
        paddingRight: boolean;
        paddingStart: boolean;
        paddingTop: boolean;
        paddingVertical: boolean;
        position: boolean;
        right: boolean;
        start: boolean;
        top: boolean;
        inset: boolean;
        insetBlock: boolean;
        insetBlockEnd: boolean;
        insetBlockStart: boolean;
        insetInline: boolean;
        insetInlineEnd: boolean;
        insetInlineStart: boolean;
        direction: boolean;
        shadowOffset: boolean;
        shadowRadius: boolean;
    };
    name?: undefined;
    tag?: undefined;
    variants?: undefined;
    defaultVariants?: undefined;
}>;
//# sourceMappingURL=Input.d.ts.map