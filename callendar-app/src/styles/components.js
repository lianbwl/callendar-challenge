// THIS STYLED COMPONENTS LIB IS STILL IN DEVELOPMENT
// My intention on creating this lib was to create a collection of
// components using only styled-components, and I'm improving this
// over some projects.
// credits: Julian Vianna @lianbwl

import styled from "styled-components";

const sizeBase = 10;

export const Wrapper = styled.section`
	width: ${(props) => props.width || "90%"};
	height: ${(props) => props.height || "auto"};
	margin: 0 auto;
	padding: ${sizeBase * 2}px;

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Grid = styled.div`
	display: flex;
	height: auto;
	width: ${(props) => props.width || "auto"};
	flex: ${(props) => props.flex || "0 1 auto"};
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.flexWrap || "unset"};
	padding: ${(props) => props.padX || "0"} ${(props) => props.padY || "0"};

	${(props) => (props.alignCenter ? "margin: 0 auto" : "none")};

	> *:not(:last-child) {
		margin-right: ${(props) => props.gapX || "none"};
	}

	> *:not(:last-child) {
		margin-bottom: ${(props) => props.gapY || "none"};
	}

	justify-content: ${(props) => props.alignX || "flex-start"};
	justify-items: ${(props) => props.content || "normal"};
	align-items: ${(props) => props.alignY || "flex-start"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

// DO THE SAME AS GRID BUT WITH A NAME THATS FIT BETTER THE ITENS INSIDE GRID
export const GridItem = styled(Grid)``;

export const Title = styled.h1`
	display: block;
	font-family: ${(props) => props.font || "Helvetica"};
	font-size: ${(props) => props.size || sizeBase * 5};
	color: ${(props) => props.color || props.theme.main};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const CallendarCell = styled.div`
  padding: ${sizeBase * 0.4}px;
  position: relative;
  border: solid 1px ${(props) => props.theme.colors.gray};
  width: ${(props) => props.width || "auto"};
  height: 120px;
  flex: ${(props) => props.flex || "auto"};

  .day-name {
    display: block;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 0.7rem;
    color: ${(props) => (props.weekend ? props.theme.colors.gray : props.theme.main)};
  }

  .plus-reminder {
    display: block;
    font-size: 11px;
    position: absolute;
    bottom: 4px;
    right: 4px;
    padding: 3px 6px;
    font-weight: bold;
    line-height: 1;
    border-radius: 3px;
    color: ${(props) => props.theme.colors.white};
    text-align: right;
    background: ${(props) => props.theme.colors.red};

    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.coral};
    }
  }

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const CallendarCellReminder = styled.a`
  display: block;
  cursor: pointer;
  font-size: 11px;
  padding: 3px 4px;
  line-height: 1;
  font-weight: bold;
  border-radius: 2px;
  background-color: ${(props) => props.reminderColor || "#E3E3E3"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #FFFFFF;
  margin-bottom: 4px;

  &:hover { opacity: 0.8; }
`;

export const HeaderBlock = styled.header`
	width: 100%;
	display: block;
	height: ${(props) => props.height || "auto"};
	background: ${(props) => props.theme.jailmailcolors.cinza1};

	.logo {
		width: auto;
		height: ${(props) => props.logoheight || "auto"};
		min-height: ${sizeBase * 4}px;
	}

	.header-title {
		font-size: ${sizeBase * 1.4}px;
		color: ${(props) => props.theme.vivocolors.white};
		font-weight: 500;
		line-height: 1;
	}

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Block = styled.div`
	display: flex;
	height: auto;
	flex: ${(props) => props.flex || "0 1 auto"};
	flex-direction: ${(props) => props.direction || "row"};
	justify-content: ${(props) => props.alignX || "flex-start"};
	align-items: ${(props) => props.alignY || "flex-start"};

	> *:not(:last-child) {
		margin-right: ${(props) => props.gapX || "none"};
	}

	> *:not(:last-child) {
		margin-bottom: ${(props) => props.gapY || "none"};
	}

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Button = styled.button`
	background: ${(props) => (props.flatBt ? props.theme.main : "none")};
	border: ${(props) =>
		props.noBorder
			? "none"
			: "1px solid" +
			  (props.flatBt ? props.theme.white : props.theme.main)};
	color: ${(props) => (props.flatBt ? props.theme.white : props.theme.main)};
	
	cursor: pointer;
	border-radius: 2px;
	padding: ${(props) => props.padSize || sizeBase * 1.4 + "px"};
	text-transform: uppercase;
	font-size: ${(props) => props.fontSize || "14px"};
	font-weight: 700;
	flex: ${(props) => props.flexSize || "0 1 auto"};

	/* COLOR WARN */
	${(props) =>
		props.color === "warn" &&
		`
		background: ${props.flatBt ? props.theme.warn : "none"};
		border-color: ${props.theme.warn};
		color: ${props.flatBt ? "none" : props.theme.warn};
	`}

	&:hover {
		opacity: 0.6;
		text-decoration: underline;

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const List = styled.ul`
	list-style: ${(props) => props.style || "none"};
	width: ${(props) => props.width || "auto"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const ListItem = styled.li`
	display: list-item;
	margin-bottom: ${(props) => props.marginBotton || "20px"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Picture = styled.picture`
	line-height: 0;
	border: solid ${(props) => props.borderWidth || sizeBase * 0.2 + `px`}
		${(props) => props.theme.main};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Chips = styled.span`
	padding: ${sizeBase * 0.6}px ${sizeBase * 1.2}px;
	border: 1px solid ${(props) => props.theme.main};
	border-radius: ${sizeBase * 1.4}px;
	margin-right: ${sizeBase * 0.6}px;
	display: ${(props) => props.display || "inline-block"};
	flex: ${(props) => props.width || "0 1 auto"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const SelectBox = styled.select`
	width: 100%;
	padding: ${sizeBase * 1.2}px ${sizeBase * 2}px;
	cursor: pointer;
	border: none;
	color: ${(props) => props.theme.main};
	background: ${(props) => props.theme.main};
	text-align: center;
	appearance: none;
	border: solid 1px ${(props) => props.theme.main};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const UserLogged = styled.div`
	padding: ${sizeBase * 1.6}px;
	border-radius: ${sizeBase * 2.5}px;
	font-size: ${sizeBase * 1.6}px;
	font-weight: 500;
	color: ${(props) => props.theme.vivocolors.white};
	background: ${(props) => props.theme.jailmailcolors.azul4};
`;

export const MenuHeader = styled.ul`
	display: flex;
	list-style: none;
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	padding: 0;
	margin: 0;
`;

export const MenuHeaderItem = styled.li`
	color: ${(props) => props.theme.vivocolors.white};
	display: flex;

	a {
		display: flex;
		justify-content: ${(props) => props.alignX || "flex-start"};
		align-items: ${(props) => props.alignY || "flex-start"};
		padding: ${(props) => props.padY || "0"} ${(props) => props.padX || "0"};
		width: ${(props) => props.width || "auto"};
		color: ${(props) => props.theme.vivocolors.white};
		text-decoration: none;
		height: ${(props) => props.height || "auto"};
		line-heigth: 1.4;

		&:hover {
			text-decoration: underline;
		}

		&.is-active {
			background: ${(props) => props.theme.jailmailcolors.cinza2};
		}
	}
`;
