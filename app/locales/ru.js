
import { APP_NAME, APP_DOMAIN, LANDING_PAGE_URL, LIQUID_TOKEN, DEBT_TOKEN, DEBT_TOKEN_SHORT, CURRENCY_SIGN, VESTING_TOKEN, LIQUID_TICKER } from 'app/client_config';
/**
 * see: app/locales/README.md
 */
const ru = {
	// this variables mainly used in navigation section
	about: "? ???????",
	explore: "???????????",
	APP_NAME_whitepaper: "?????? ? " + APP_NAME + '?',
	buy_LIQUID_TOKEN: '?????? ' + LIQUID_TOKEN,
	sell_LIQUID_TOKEN: '??????? ' + LIQUID_TOKEN,
	market: "?????",
	currency_market: "???????? ?????",
	stolen_account_recovery: "??????? ??????????? ????????",
	change_account_password: "???????? ?????? ????????",
	steemit_chat: "Steemit ???",
	steemit_api_docs: "Steemit API Docs",
	APP_NAME_chat: APP_NAME + " ???",
	witnesses: "????????",
	vote_for_witnesses: "????????????? ?? ??????????",
	privacy_policy: "???????? ??????????????????",
	terms_of_service: "??????? ???????????",
	sign_up: "???????????",
	/* end navigation */
	buy: '??????',
	sell: '???????',
	buy_VESTING_TOKEN: '?????? ' + VESTING_TOKEN,
	transaction_history: '??????? ??????????',
	submit_a_story: '???????? ????',
	nothing_yet: '???? ?????? ???',
	close: '???????',
	// next 5 strings were supposed to be sinngle block of text, but due large size,
	// code erros they were splitted.
	authors_get_paid_when_people_like_you_upvote_their_post: '? ???? ????? ?????? ???????? ??????????????, ????? ???????????? ???????? ?? ?? ?????.',
	if_you_enjoyed_what_you_read_earn_amount: "??????????????? ? ?????? ?????????? ???????????? ?????????????? ? ????????? ??????",
	when_you_link_text: '?????????????????',
	// post_promo_text: "?????? ???????? ??????????????, ????? ???????????? ???????? ?? ?? ?????<br />??????????????? ????? ???????????????. ???? ??? ???????????, ?? ??? ?? ????????? ?????, ??????????? {amount} ? " + VESTING_TOKEN + "<br />. ??? ?????  {link} ? ???????????? ?? ????.",
	read_only_mode: '??-?? ???????????? ???????????? ??????? ?? ???????? ? ?????? ??????. ???????? ?? ??????????.',
	membership_invitation_only: '????? ????????????? ?????? ?????? ???????? ?????? ?? ???????????. ????????? ????? ???????? ? ???????????', // ???????? ?????????????????? ?
	submit_email_to_get_on_waiting_list: '???????? ??? ????? ??????????? ?????, ????? ??????? ? ?????? ????????',
	login: '?????',
	logout: '?????',
	show_less_low_value_posts: "???????? ?????? ????????? ?????? ?????????",
	show_more_low_value_posts: "???????? ?????? ????????? ?????? ?????????",
	select_topic: '??????? ?????',
	tags_and_topics: "???? ? ??????",
	filter: "??????",
	show_more_topics: "???????? ?????? ???????",
	we_require_social_account: APP_NAME + ' ?????????? ?????? ??????? ?? ????? ????? {signup_bonus} ? ' + VESTING_TOKEN + '; ????? ????????????? ???????????????, ?? ?????? ????? ????????????? ???????????????? ????????? ?????????? ????.',
	personal_info_will_be_private: '???? ???????????? ?????????? ????? ??????????',
	personal_info_will_be_private_link: '?????????',
	continue_with_facebook: '?????????? ? Facebook',
	continue_with_reddit: '?????????? ? Reddit',
	continue_with_vk: '?????????? ? Vk',
	requires_positive_karma: '?????????? ?????????? ????? Reddit ???????????????',
	dont_have_facebook: '??? Facebook ??? Reddit ?????????',
	subscribe_to_get_sms_confirm: '??????????? ????? ???????? SMS ????? ????????????? ????? ????????',
	by_verifying_you_agree: '??????????? ??? ??????? ?? ???????????? ? ????????? ??????? ' + APP_NAME,
	by_verifying_you_agree_terms_and_conditions: '????????? ? ????????????',
	terms_and_conditions: '??????? ? ??????????',
	// this is from top-right dropdown menu
	hot: '??????????',
	trending: '??????????',
	payout_time: '????? ???????',
	active: '???????????',
	responses: '??????',
	popular: '??????????',
	/* end dropdown menu */
	loading: '????????',
	cryptography_test_failed: '????????????????? ???? ????????',
	unable_to_log_you_in: '? ??? ?? ????????? ?????????? ??? ? ???? ????????',
	// next 3 blocks will be used in conjunction
	/* this is how it will look like:
	'The latest versions of <a href="https://www.google.com/chrome/">Chrome</a> and <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> are well tested and known to work with steemit.com.' */
	the_latest_versions_of: '????????? ??????',
	and: '?',
	are_well_tested_and_known_to_work_with: '?????? ??????????? ? ???????? ? ' + APP_DOMAIN + '.',
	account_creation_succes: '???? ??????? ??????? ??????!',
	account_recovery_succes: '???? ??????? ?????? ????????????!',
	password_update_succes: '?????? ??? {accountName} ??? ??????? ????????',
	password_is_bound_to_your_accounts_owner_key: "???? ?????? ???????? ? ???????? ????? ???????? ? ?? ????? ???? ??????????? ??? ????????? ?? ?????",
	however_you_can_use_it_to: "??? ?? ????? ??? ????? ???????????? ?????",
	to_obtaion_a_more_secure_set_of_keys: "??? ????????? ????? ??????????? ?????? ??????",
	update_your_password: '???????? ???? ??????',
	enter_username: '????? ???? ??? ????????????',
	password_or_wif: '?????? ??? WIF',
	requires_auth_key: '??? ???????? ??????? ?????? {authType} ????? (??? ??????????? ??????? ??????)',
	keep_me_logged_in: '????????? ???? ????????????',
	// this are used mainly in "submit a story" form
	title: "?????????",
	write_your_story: '???????? ???? ???????',
	editor: '????????',
	reply: '????????',
	edit: '?????????????',
	delete: '???????',
	cancel: '??????',
	clear: '????????',
	save: '?????????',
	upvote_post: '????????????? ?? ????',
	update_post: '???????? ????',
	markdown_is_supported: '?????????????? ?????????? ? Markdown',
	preview: '??????????????? ????????',
	markdown_not_supported: 'Markdown ????? ?? ??????????????',
	welcome_to_the_blockchain: '????? ?????????? ? Blockchain!',
	your_voice_is_worth_something: '???? ????? ????-?? ?????',
	learn_more: '?????? ??????',
	get_VESTING_TOKEN_when_sign_up: '?????? {signupBonus} ' + VESTING_TOKEN + ' ???????????? ???????.',
	all_accounts_refunded: '??? ?????? ?? ????????????????? ????????? ???? ????????? ??????????????',
	APP_URL_is_now_open_source: APP_DOMAIN + ' ?????? Open Source',
	// this is mainly from ReplyEditor
	tag_your_story: '?????? ???? (?? 5 ????), ?????? ??? ?????? ???????? ??????????.',
	select_a_tag: '??????? ???',
	required: '???????????',
	shorten_title: '????????? ?????????',
	exceeds_maximum_length: '????????? ???????????? ????? ({maxKb}KB)',
	including_the_category: "(??????? ????????? '{rootCategory}')",
	use_limited_amount_of_tags: '? ??? {tagsLength} ?????, ??????? {includingCategory}. ??????????, ??????????? ?? ????? 5 ? ????? ? ?????????.',
	// this is mainly used in CategorySelector
	maximum_tag_length_is_24_characters: '???????????? ????? ????????? 24 ?????',
	use_limitied_amount_of_categories: '?????????? ??????????? ?? ????? {amount} ?????????',
	use_only_lowercase_letters: '??????????? ?????? ??????? ??????? ????????',
	use_one_dash: '??????????? ?????? ???? ????',
	use_spaces_to_separate_tags: '??????????? ?????? ????? ????????? ????',
	use_only_allowed_characters: '??????????? ?????? ???????? ?????, ????? ? ???? ????',
	must_start_with_a_letter: '?????? ?????????? ? ?????',
	must_end_with_a_letter_or_number: '?????? ????????????? ? ????? ??? ??????',
	// tags page
	tag: '???',
	replies: '??????',
	payouts: '???????',
	need_password_or_key: '??? ????? ????????? ?????? ??? ???? (?? ????????? ????)',
	// BlocktradesDeposit
	change_deposit_address: '???????? ????? ????????',
	get_deposit_address: '???????? ????? ????????',
	// for example 'powered by Blocktrades'
	powered_by: 'Powered by', // NOTE this might be deleted in future
	send_amount_of_coins_to: '????????? {value} {coinName} ?',
	amount_is_in_form: '????? ?????? ???? ? ??????? 99999.999',
	insufficent_funds: '???????????? ???????',
	update_estimate: '???????? ??????',
	get_estimate: '???????? ??????',
	memo: '???????',
	must_include_memo: '?????????? ???????? ???????',
	estimate_using: '?????????? ?????????',
	amount_to_send: '????? ? ???????? {estimateInputCoin}',
	deposit_using: '????????? ?????', // example: 'deposit using Steem Power' // TODO: is this example right?
	suggested_limit: '???????????? ????? {depositLimit}',
	internal_server_error: '?????????? ?????? ???????',
	enter_amount: '?????? ??????????',
	processing: '??????????????',
	broadcasted: '?????????????',
	confirmed: '????????????',
	remove: '???????',
	collapse_or_expand: "????????/??????????",
	reveal_comment: '???????? ???????????',
	are_you_sure: '?? ????????',
	// PostFull.jsx
	by: ' ', // ???c? ?????????? ?????? ???, ??????: "posted by 'Vitya'" > "??????? 'Vitya'"
	in: '?',
	share: '??????????',
	in_reply_to: '? ????? ??',
	replied_to: '???????', // ???? ??? ? 'by'
	transfer_amount_to_VESTING_TOKEN: "????????? {amount} ? " + VESTING_TOKEN,
	transfer_amount_VESTING_TOKEN_to: "??????? {amount} " + VESTING_TOKEN + " ?",
	recieve_amount_VESTING_TOKEN_from: "????????? {amount} " + VESTING_TOKEN + " ??",
	transfer_amount_VESTING_TOKEN_from_to: "???????? {amount} " + VESTING_TOKEN + " ?? {from} ?",
	transfer_amount_to: "??????? {amount} ?? ????",
	recieve_amount_from: "???????? {amount} ??",
	transfer_amount_from: "??????? {amount} ?? ?????",
	transfer_amount_steem_power_to: "??????? {amount} "+LIQUID_TICKER+" ? ???? ??????",
	stop_power_down: "?????????? ???? ?????? ???????????",
	start_power_down_of: "?????????? ???? ?????? ?????? ?",
	curation_reward_of_VESTING_TOKEN_for: '??????????? ?????????????? {reward} ' + VESTING_TOKEN + ' ??',
	author_reward_of_VESTING_TOKEN_for: '????????? ?????????????? {payout} ? {reward} ' + VESTING_TOKEN + ' ??',
	recieve_interest_of: '???????? ???????? ? ??????? {interest}',
	// TODO find where this is used and write an example
	from: '??',
	to: '?',
	account_not_found: '??????? ?? ??????',
	this_is_wrong_password: '??? ???????????? ??????',
	do_you_need_to: '??? ?????',
	recover_your_account: '???????????? ??? ???????', // this probably will end with question mark
	reset_usernames_password: "???????? ?????? ???????????? {username}",
	this_will_update_usernames_authtype_key: '??? ??????? {username} {authType} ????',
	the_rules_of_APP_NAME: "?????? ??????? ???? " + APP_NAME + ": ?? ??????? ???? ??????. <br /> ?????? ??????? " + APP_NAME + ": <strong>??</strong> ??????? ???? ??????. <br /> ?????? ??????? " + APP_NAME + ": ?? ?? ????? ???????????? ??? ??????. <br /> ????????? ???????: ???? ?? ?????? ????????? ???? ??????, ?????? ?? ?? ?????????. <br /> ????? ???????: ??????????? ?????? ??????????????? ????????? ??????? ??????. <br /> ?????? ???????: ?????? ?? ???????? ???? ??????. <br /> ??????? ???????: ?????? ??????? ??????? ???? ??????.",
	account_name: '??? ????????',
	recover_password: '???????????? ???????',
	current_password: '??????? ??????',
	recent_password: '???????? ??????',
	generated_password: '??????????????? ??????',
	recover_account: '???????????? ???????',
	new: '?????', // ex. 'Generated Password (new)', but not exclusively
	age: '?????',
	votes: 'votes',
	backup_password_by_storing_it: '???????? ????????? ????? ? ????????? ??????? ??? ????????? ?????',
	click_to_generate_password: '???????, ????? ????????????? ??????',
	re_enter_generate_password: '???????? ??????? ??????',
	understand_that_APP_NAME_cannot_recover_password: '? ??????? ??? ' + APP_NAME + ' ?? ?????? ???????????? ?????????? ??????',
	i_saved_password: '? ??????? ???????? ??????????????? ??????',
	update_password: '???????? ??????',
	password_must_be_characters_or_more: '?????? ?????? ???? {amount} ???????? ??? ??????',
	passwords_do_not_match: '?????? ?? ?????????',
	you_need_private_password_or_key_not_a_public_key: '??? ????? ????????? ?????? ??? ???? (?? ????????? ????)',
	account_updated: '??????? ????????',
	warning: '????????',
	your_password_permissions_were_reduced: '???? ?????????? ?????? ???? ???????',
	if_you_did_not_make_this_change: '???? ?? ?? ?????? ???? ?????????, ??????????',
	owhership_changed_on: '????????????? ???????? ??',
	deadline_for_recovery_is: '??????? ?????? ??? ?????????????? ????????',
	i_understand_dont_show_again: "???????, ?????? ?? ??????????",
	ok: '??', // ????? ???????????? "??????" ??? "?????"?
	convert_to_VESTING_TOKEN: '????????? ? ' + VESTING_TOKEN,
	DEBT_TOKEN_will_be_unavailable: '??? ???????? ????? ????????? 3,5 ???? ?? ?????????? ??????? ? ?? ?????? ????????. ??? ' + DEBT_TOKEN + ' ????????? ?????? ??????????',
	amount: '??????????',
	convert: '??????????????',
	invalid_amount: '???????? ??????????',
	insufficent_balance: '????????????? ??????',
	in_week_convert_DEBT_TOKEN_to_LIQUID_TOKEN: '? 3,5 ??? ????????? {amount} ' + DEBT_TOKEN + ' ? ' + LIQUID_TOKEN,
	order_placed: '????? ????????', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: '???????????',
	unfollow: '??????????',
	mute: '???????????',
	unmute: '??????????????',
	confirm_password: '??????????? ??????',
	login_to_see_memo: '????? ????? ??????? ???????',
	post: '????', // places used: tooltip in MediumEditor
	unknown: '???????????', // exp.: 'unknown error'
	account_name_is_not_available: '??? ???????? ??????????',
	type: '???',
	price: '????',
	// Market.jsx
	last_price: '????????? ????',
	'24h_volume': '????? ?? 24 ????',
	bid: '???????',
	ask: '???????',
	spread: '???????',
	total: '?????',
	available: '????????',
	lowest_ask: '?????? ???? ???????',
	highest_bid: '?????? ???? ???????',
	buy_orders: '?????? ?? ???????',
	sell_orders: '?????? ?? ???????',
	trade_history: '??????? ??????',
	open_orders: '???????? ??????',
	sell_amount_for_atleast: '??????? {amount_to_sell} ?? {min_to_receive} ?? ????  ({effectivePrice})',
	buy_atleast_amount_for: '?????? {min_to_receive} ?? {amount_to_sell} ({effectivePrice})',
	price_warning_above: 'This price is well above the current market price of {marketPrice}, are you sure?', //FIXME
	price_warning_below: 'This price is well below the current market price of {marketPrice}, are you sure?', //FIXME
	order_cancel_confirm: 'Cancel order {order_id} from {user}?', //FIXME
	order_cancelled: 'Order {order_id} cancelled.', //FIXME
	higher: '??????', // context is about prices
	lower: '???????', // context is about prices
	total_DEBT_TOKEN_SHORT_CURRENCY_SIGN: "????? " + DEBT_TOKEN_SHORT + ' (' + CURRENCY_SIGN + ')',
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: '???????????????',
	account_name_is_not_found: '??? ???????? ?? ???????',
	unable_to_recover_account_not_change_ownership_recently: '? ??? ?? ?????????? ???????????? ???? ???????, ?? ?? ????? ????????? ? ???????? ?????.',
	password_not_used_in_last_days: '???? ?????? ?? ????????????? ? ???? ???????? ?? ????????? 30 ????.',
	request_already_submitted_contact_support: '??? ?????? ??? ?????????, ? ?? ???????? ??? ????. ??????????, ????????? ? contact@steemit.com ??? ????????? ??????? ?????? ???????.',
	recover_account_intro: "?????? ?????? ???  ???? ????????? ????? ???? ????????????????. ?????????????? ??????????? ???????? ???? ????????? ????????? 30 ???? ????? ??????? ??????? ? ??????? ????????? ?????????????? ????? ??????????. ?????????????? ??????????? ???????? ? " + APP_DOMAIN + " ???????? ?????? ???? ???????? ???????? ????? ?????? '" + APP_NAME + "' ? ???????? ??????????? ???? ? ?????????? ? ????????? ????????????? ?????  " + APP_NAME + ".",
	login_with_facebook_or_reddit_media_to_verify_identity: '??????????, ??????? ????????? Facebook ??? Reddit ????? ??????????? ???? ????????',
	login_with_social_media_to_verify_identity: '??????????, ??????? ? ??????? {show_social_login} ????? ??????????? ???? ????????',
	enter_email_toverify_identity: '??? ????? ??????????? ???? ????????. ?????????? ??????? ???? ??????????? ????? ????, ????? ?????? ????????.',
	email: '??????????? ?????',
	continue_with_email: "??????????",
	thanks_for_submitting_request_for_account_recovery: '<p>?????????? ??? ?? ???????? ??????? ?? ?????????????? ???????? ????????? ?????????? ?? ????????? ??????????????? ?????????????? ' + APP_NAME + 'a.</p> <p>?? ??????? ??? ??? ????? ???????, ??????, ??????????, ???????? ??? ????? ???? ????????? ???????? ??-?? ???????? ?????? ?????.</p> <p>??????????, ?????? ?????? ??????????? ???? ????????.</p>',
	recovering_account: '??????????????? ???????',
	checking_account_owner: '????????? ????????? ????????',
	sending_recovery_request: '?????????? ?????? ??????????????',
	cant_confirm_account_ownership: '?? ?? ????? ??????????? ???????? ?????????. ????????? ??? ??????.',
	account_recovery_request_not_confirmed: "?????? ?????????????? ???????? ??? ?? ???????????, ?????????? ????????? ???????. ??????? ?? ???? ????????.",
	vote: '?????????????', // context: to vote? (title attribute on voting button)
	witness: '????????',
	top_witnesses: '??? ?????????',
	// user's navigational menu
	feed: '?????',
	wallet: '???????',
	blog: '????',
	change_password: '??????? ??????',
	// UserProfile
	unknown_account: '??????????? ???????',
	user_hasnt_made_any_posts_yet: "?????? ??? {name} ??? ?? ??????? ??????!",
	user_hasnt_started_bloggin_yet: "?????? ??? {name} ??? ?? ????? ????!",
	user_hasnt_followed_anything_yet: "?????? ??? {name} ??? ?????? ?? ?? ???? ?? ????????! ???? {name} ??????? ???????? ????? ???????????? ?????????, ?? ??????????????????? ????? ????? ????????? ???? ??? ????? ??????? ????????",
	user_hasnt_had_any_replies_yet: "{name} ??? ?? ??????? ???????",
	users_blog: "???? {name}",
	users_posts: "????? {name}",
	users_wallet: "??????? {name}",
	users_curation_rewards: "??????????? ?????????????? {name}",
	users_author_rewards: "????????? ??????? {name}",
	users_permissions: "?????????? {name}",
	recent_replies_to_users_posts: "???????? ?????? ? ?????? ???????????? {name}",
	print: '???????????',
	curation_rewards: "??????????? ???????",
	author_rewards: '????????? ???????',
	feeds: '?????',
	rewards: '???????',
	permissions: '??????????',
	password: '??????',
	posts: '?????',
	// PLURALS
	// see locales/README.md on how to properly use them
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		zero {0 ??????}
		one {# ????}
		few {# ?????}
		many {# ??????}
	}`,
	follower_count: `{followerCount, plural,
		zero {0 ???????????}
		one {# ?????????}
		few {# ??????????}
		many {# ???????????}
	}`,
	followed_count: `{followingCount, plural,
		zero {0 ????????}
		one {# ????????}
		few {# ????????}
		many {# ????????}
	}`,
	vote_count: `{voteCount, plural,
		zero {0 ???????}
		one {# ?????}
		few {# ??????}
		many {# ???????}
	}`,
	response_count: `{responseCount, plural,
		zero {0 ???????}
		one {# ?????}
		few {# ??????}
		many {# ???????}
	}`,
	reply_count: `{replyCount, plural,
		zero {0 ???????}
		one {# ?????}
		few {# ??????}
		many {# ???????}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "??? ?????????? ????? ????????? ???????????? {name}.\n\n?????????? ????? ?????????????? ?? ?????? ??????? ?????????? ??????? ? ?? ??? ??????? ?????? ????????.",
	newer: '?????',
	older: '??????',
	author_rewards_last_24_hours: '????????? ?????????????? ?? ????????? 24 ????',
	daily_average_author_rewards: '?????????????? ????????? ??????????????',
	author_rewards_history: '??????? ????????? ??????',
	balance: '??????',
	balances: '???????',
	estimate_account_value: '?????? ????????? ????????',
	next_power_down_is_scheduled_to_happen_at: '????????? ????????? ???? ?????? ????????????? ??',
	transfers_are_temporary_disabled: '???????? ???????? ?????????',
	history: '???????',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: '??????????? ??????? ?? ????????? 24 ????',
	daily_average_curation_rewards: '?????????????? ??????????? ???????',
	estimated_curation_rewards_last_week: "????????? ??????????? ??????? ?? ????????? ??????",
	curation_rewards_last_week: "??????????? ??????? ?? ????????? ??????",
	curation_rewards_history: '??????? ??????????? ??????',
	// Post.jsx
	now_showing_comments_with_low_ratings: '?????????? ??????????? ? ?????? ?????????',
	hide: '??????',
	show: '????????',
	sort_order: '??????? ??????????',
	comments_were_hidden_due_to_low_ratings: '??????????? ???? ?????? ??-?? ??????? ????????',
	we_will_be_unable_to_create_account_with_this_browser: '? ??? ?? ????????? ??????? ??????? ????????? ???? ???????',
	you_need_to_logout_before_creating_account: '??? ????? {logoutLink} ?????? ??? ?? ??????? ??????? ?????? ???????',
	APP_NAME_can_only_register_one_account_per_verified_user: '??????????, ?????? ????? ??? ' + APP_NAME + ' ????? ????????????? ?????? ???? ??????? ??? ??????? ??????????????? ????????????',
	username: '??? ????????????',
	couldnt_create_account_server_returned_error: "?? ?????????? ??????? ???????. ?????? ?????? ??? ??????",
	form_requires_javascript_to_be_enabled: '??? ????? ??????? ?????????????? ? ???????? javascript',
	our_records_indicate_you_already_have_account: '???? ?????? ?????????? ??? ? ??? ??? ???? ' + APP_NAME + ' ??????',
	to_prevent_abuse_APP_NAME_can_only_register_one_account_per_user: '????? ????????????? ??????????????? (?????? ?????????????????? ??????? ????? {amount} ? ' + LIQUID_TOKEN + ') ' + APP_NAME + ' ????? ?????????????? ?????? ???? ??????? ??? ??????? ??????????????? ????????????.',
	// next 3 blocks are meant to be used together
	you_can_either: '?? ?????? ???', // context 'you can either login'
	to_your_existing_account_or: '? ??? ???????????? ??????? ???', // context: 'to your existing account or send us email'
	if_you_need_a_new_account: '???? ??? ????? ????? ???????',
	send_us_email: '????????? ??? ??????????? ?????',
	connection_lost_reconnecting: '????? ????????, ????????????????',
	// Voting.jsx
	stop_seeing_content_from_this_user: '????????? ?????? ??????? ?? ????? ????????????',
	flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: '????? ?????? ????? ????? ?????????????? ? ??????? ???? ????? ???????. ??????????? ?????? ?????? ???????????? ??',
    disagreement_on_rewards: '?????????? ?? ???????',
    fraud_or_plagiarism: '????????????? ??? ???????',
	hate_speech_or_internet_trolling: '?????????? ????????? ??? ???????? ????????',
	intentional_miss_categorized_content_or_spam: '?????????????? ???????????? ????????????? ???????? ??? ????',
	downvote: '?????????? ??????',
	pending_payout: '????????? ???????',
	past_payouts: '??????? ???????',
	more: '??????',
	remove_vote: '?????? ?????',
	upvote: '?????????? ??',
	we_will_reset_curation_rewards_for_this_post: '??????? ???? ??????????? ?????????????? ?? ???? ????',
	removing_your_vote: '???????? ??????',
	changing_to_an_upvote: '??????? ?? ????? ??',
	changing_to_a_downvote: '??????? ?? ????? ??????',
	confirm_flag: '??????????? ????? ??????',
	date_created: '???? ????????',
	search: '?????',
	begin_recovery: '?????? ??????????????',
	post_as: '????????? ???', // 'Post as Misha'
	action: '????????',
	APP_NAME_app_center: '????? ?????????? ' + APP_NAME,
	witness_thread: '???? ????????',
	you_have_votes_remaining: '? ??? ???????? {votesCount} ???????',
	you_can_vote_for_maximum_of_witnesses: '?? ?????? ?????????? ???????? ?? 30 ?????????',
	set_witness_proxy: "You can also choose a proxy that will vote for witnesses for you. This will reset your current witness selection.", // FIXME
	witness_set: "You have set a voting proxy. If you would like to reenable manual voting, please clear your proxy.", // FIXME
	witness_proxy_current: "Your current proxy is", // FIXME
	witness_proxy_set: "Set proxy", // FIXME
	witness_proxy_clear: "Clear proxy", // FIXME
	information: '??????????',
	if_you_want_to_vote_outside_of_top_enter_account_name: '???? ?? ?????? ????????????? ?? ???????? ??? top 50, ??????? ??? ???????? ????',
	view_the_direct_parent: '???????? ??????? ????????',
	you_are_viewing_single_comments_thread_from: '?? ??????? ???? ???? ???????????? ??',
	view_the_full_context: '???????? ?????? ????????',
	this_is_a_price_feed_conversion: '??? ????????? ????. ???????? 3,5 ???? ?????????? ????? ????????????? ??????????????? ?? ???? ?? ??????? ??????? ?????????.',
	your_existing_DEBT_TOKEN_are_liquid_and_transferable: '???? ???????????? ' + DEBT_TOKEN + ' ???????? ? ???????????. ????????, ?? ?????? ????????? ' + DEBT_TOKEN + ' ???????? ?? ???? ????? ? ??????? {link} ??? ????????? ?? ??????? ?????.',
	buy_or_sell: '?????? ??? ???????',
	trending_30_day: '?????????? (30 ????)',
	promoted: '????????????',
	comments: '???????????',
	topics: '??????',
	// TODO
	this_password_is_bound_to_your_accounts_private_key: '???? ?????? ???????? ? ????????? ????? ?????? ???????? ? ?? ????? ???? ??????????? ??? ????? ?? ??? ????????. ?? ?????? ???????????? ??? ??? ????? ?? ?????? ????? ?????????? ???????? ??? "???????" ??? "??????".',
	potential_payout: '????????????? ???????',
	boost_payments: '?????? ?? ???????????',
	authors: '??????',
	curators: '????????',
	date: '????',
	no_responses_yet_click_to_respond: '??????? ???? ???. ??????? ????? ????????.',
	click_to_respond: '??????? ????? ????????',
	new_password: '????? ??????',
	paste_a_youtube_or_vimeo_and_press_enter: '???????? YouTube ??? Vimeo ?????? ? ??????? Enter',
	there_was_an_error_uploading_your_image: '????????? ?????? ?? ????? ???????? ???????????',
	raw_html: 'HTML ???',
	please_remove_following_html_elements: '?????????? ??????? ??? HTML ???????? ?? ?????? ?????:',
	reputation: "?????????",
	remember_voting_and_posting_key: "????????? ????? ? ??????? ????",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: '???????? ??????????????',
	yes: '??',
	no: '???',
	hide_private_key: '?????? ????????? ????',
	show_private_key: '???????? ????????? ????',
	login_to_show: '????? ????? ????????',
	APP_NAME_cannot_recover_passwords_keep_this_page_in_a_secure_location: APP_NAME + ' ?? ????? ???????????? ??????. ????????? ??? ???????? ? ?????????? ?????, ????????, ? ??????????? ????? ??? ? ???????????? ??????.',
	APP_NAME_password_backup: APP_NAME + ' ????????? ??????????? ??????',
	APP_NAME_password_backup_required: APP_NAME + ' ????????? ??????????? ?????? (???????????)',
	after_printing_write_down_your_user_name: '????? ?????? ???????? ???? ??? ????????????',
	public: '?????????',
	private: '?????????',
	public_something_key: '????????? {key} ????',
	private_something_key: '????????? {key} ????',
	// UserProfile > Permissions
	posting_key_is_required_it_should_be_different: '??????? ???? ???????????? ??? ???????? ? ???????????. ?? ?????? ?????????? ?? ????????? ? ????? ?????????.',
	the_active_key_is_used_to_make_transfers_and_place_orders: '???????? ???? ???????????? ??? ????????? ? ?????????? ??????? ?? ?????????? ?????.',
	the_owner_key_is_required_to_change_other_keys: '???? ????????? ??? ??????? ???? ?? ????? ????????, ?? ????????? ??? ????????? ?????? ??????.',
	the_private_key_or_password_should_be_kept_offline: '????????? ???? ??? ?????? ?????? ????????? ? ???????? ??? ????? ????????? ????????.',
	the_memo_key_is_used_to_create_and_read_memos: '???? ??????? ???????????? ??? ???????? ? ?????? ???????.',
	previous: '??????????',
	next: '?????????',
	browse: '??????????',
	not_valid_email: '?? ?????????????? ?????',
	thank_you_for_being_an_early_visitor_to_APP_NAME: '?????????? ??? ?? ?? ??? ????????? ?????? ??????????? ' + APP_NAME + '. ?? ???????? ? ???? ??? ?????? ?? ???????????.',
	estimated_author_rewards_last_week: "????????? ????????? ?????????????? ?? ??????? ??????",
	author_rewards_last_week: "????????? ????????? ?????????????? ?? ??????? ??????",
	confirm: '???????????',
	asset: '?????',
	this_memo_is_private: '??? ??????? ???????? ?????????',
	this_memo_is_public: '??? ??????? ???????? ?????????',
	power_up: '??????? ???? ??????',
	power_down: '????????? ???? ??????',
	cancel_power_down: '???????? ????????? ???? ??????',
	transfer: '????????',
	deposit: '??????',
	basic: '???????',
	advanced: '???????????',
	convert_to_LIQUID_TOKEN: '????????? ? ' + LIQUID_TOKEN,
	transfer_to_account: '???????? ????????????',
	buy_LIQUID_TOKEN_or_VESTING_TOKEN: '?????? ' + LIQUID_TOKEN + ' ??? ' + VESTING_TOKEN,
	// TODO
	version: '??????',
	about_APP_NAME: '? ' + APP_NAME,
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: APP_NAME + ' ??? ?????????? ????? ????????? ? ??????? <strong>???</strong>&nbsp;???????? <strong>??????</strong> ?? ???????? ? ??????????? ????????',
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid: APP_NAME + ' ??? ?????????? ????? ????????? ? ??????? ?????? ???????????? ?? ???????? ? ??????????? ????????. ?? ?????????? ???????? ??????? ???????? ????? ??? ????????? ' + LIQUID_TOKEN + ', ??????? ???????????? ???????? ???????? ??? ???????? ?????? ????? ????????? ???????? ???? ? ???????????.',
	learn_more_at_LANDING_PAGE_URL: '?????? ?????? ? ' + LANDING_PAGE_URL,
	resources: '???????',
	join_our_slack: '??????????????? ? ?????? Slack',
	APP_NAME_support: APP_NAME + ' ?????????',
	please_email_questions_to: '??????????, ????? ???? ??????? ?? ??????????? ?????',
	sorry_your_reddit_account_doesnt_have_enough_karma: "????????, ? ?????? Reddit ???????? ???????????? Reddit ????? ????? ????? ??????????? ?????????? ???????????. ??????????, ???????? ???? ??????????? ????? ????? ?????????? ? ???? ????????",
	register_with_facebook: '??????????? ? Facebook',
	or_click_the_button_below_to_register_with_facebook: '??? ??????? ??????, ????? ?????????????????? ? Facebook',
	trending_24_hour: '?????????? (24 ????)',
	home: '?????',
	'24_hour': '24 ????',
	'30_day': '30 ????',
	flag: "?????????? ??????",
	promote: '??????????',
	// Tips.js
	tradeable_tokens_that_may_be_transferred_anywhere_at_anytime: '???????????? ???????? ??????, ??????? ????? ???????? ???? ?????? ? ????? ??????.',
	LIQUID_TOKEN_can_be_converted_to_VESTING_TOKEN_in_a_process_called_powering_up: LIQUID_TOKEN + ' ????? ???? ????????????? ? ' + VESTING_TOKEN + ', ???? ??????? ?????????? "???????? ??????".',
	tokens_worth_about_AMOUNT_of_LIQUID_TOKEN: '???????????? ???????? ??????, ???? ??????? ?????? ????? ~1 ?? ?????? ? ' + LIQUID_TOKEN + '.',
	influence_tokens_which_earn_more_power_by_holding_long_term: '?????????????? ???????? ??????, ?? ?????????? ????????????? ??? ???????????? ????????.',
	the_more_you_hold_the_more_you_influence_post_rewards: '??? ?? ??????, ??? ??????? ?? ??????? ?? ?????????????? ?? ???? ? ??? ?????? ????????????? ?? ???????????.',
	the_estimated_value_is_based_on_an_average_value_of_steem_in_US_dollars: '??????? ????????? ???????? ?? ??????? ???????? ' + LIQUID_TOKEN +  ' ? ???????? ???',
	VESTING_TOKEN_is_non_transferrable_and_requires_convert_back_to_LIQUID_TOKEN: VESTING_TOKEN + ' ?????? ?????????? ? ??????????? 3 ?????? ? 13 ??????? ????? ????????? ??????? ? ' + LIQUID_TOKEN + '.',
	// TODO
	converted_VESTING_TOKEN_can_be_sent_to_yourself_but_can_not_transfer_again: '???????????????? ' + VESTING_TOKEN + ' ????? ???? ?????????? ???? ??? ????-?? ???, ?? ?? ????? ???? ???????? ????? ??? ??????????????? ????? ? ' + LIQUID_TOKEN + '.',
	profile: '???????',
	send_to_account: '????????? ????????',
	confirm_email: '??????????? ??????????? ?????',
	authenticate_for_this_transaction: '??????????????? ??? ???? ??????????',
	login_to_your_APP_NAME_account: '??????? ? ??? ' + APP_NAME + ' ???????',
	// UserProfile > Permissions
	posting: '???????',
	owner: '????????',
	active_or_owner: '???????? ??? ?????????',
	sign: '?????',
	dismiss: '??????',
	// next 3 strings are used conditionally together
	show_more: '???????? ??????',
	show_less: '???????? ??????',
	value_posts: '????????? ?????? ?????????',
	// PormotePost.jsx
  leave_this_unchecked_to_receive_half_your_reward: '?? ????????? ???????? ????',
	promote_post: '?????????? ????',
	spend_your_DEBT_TOKEN_to_advertise_this_post: '??????????? ???? ' + DEBT_TOKEN + ' ????? ???????????????? ???? ???? ? ?????? ????????????? ????????',
	you_successfully_promoted_this_post: '?? ??????? ?????????? ???? ????',
	pay_me_100_in_VESTING_TOKEN: '????????? ??? 100% ? ' + VESTING_TOKEN,
	requires_5_or_more_reddit_comment_karma: '?????????? 5 ??? ?????? Reddit ????? ???????????????',
	this_post_was_hidden_due_to_low_ratings: '???? ???? ??? ????? ??-?? ??????? ????????',
	reblogged_by: '?????????',
	reblog: '??????????',
	updated: '???????????',
	created: '?????',
	settings: '?????????',
	incorrect_password: '???????????? ??????',
	username_does_not_exist: '?????? ????? ?? ??????????',
	// string with a '.'(dot) is returned from the server, so you should add it too, despite rules
	account_name_should_be_longer: '??? ???????? ?????? ???? ???????.',
	account_name_should_be_shorter: '??? ???????? ?????? ???? ??????.',
	account_name_should_start_with_a_letter: '??? ???????? ?????? ?????????? ? ?????.',
	account_name_should_have_only_letters_digits_or_dashes: '??? ???????? ?????? ?????? ???????? ?????? ?? ????, ???? ??? ???????.',
	choose_language: '???????? ????',
	choose_currency: '???????? ??????',
	crowdsale: '?????????',
	followers: '??????????',
	// errors
	vote_currently_exists_user_must_be_indicate_a_to_reject_witness: '????? ??? ??????????, ???????????? ?????? ?????????? ??????? ?????? ????????',
	only_one_APP_NAME_account_allowed_per_ip_address_every_10_minutes: '?????? ???? ????? ??????? ???????? ? ?????? IP ?????? ?????? ?????? ?????',
	// enter_confirm_email.jsx
	thank_you_for_providing_your_email_address: '?????????? ??? ?? ?????????????? ????? ??????????? ?????',
	to_continue_please_click_on_the_link_in_the_email_weve_sent_you: '??? ???????????, ???????? ?????? ? ??????, ??????? ?? ??? ????????',
	user_not_found: '???????????? ?? ??????',
	please_provide_your_email_address_to_continue_the_registration_process: '??????????, ??????? ????? ????? ??????????? ????? ????? ?????????? ??????? ???????????',
	this_information_allows_steemit_to_assist_with_account_recovery_in_case_your_account_is_ever_compormised: '??? ?????????? ????????? ?????? ?????? ??? ???????????? ???????, ???? ?? ?????-?????? ????? ???????',
	email_address_cannot_be_changed_at_this_moment_sorry_for_inconvenience: '????? ??????????? ????? ?? ?????? ?????? ?? ????? ???? ???????, ???????? ?? ??????????',
	continue: '??????????',
	email_address: '????? ??????????? ?????',
	please_prove_an_email_address: '?????????? ??????? ????? ??????????? ?????',
	failed_captcha_verification_please_try_again: '?????? ???????? ?????, ?????????? ??? ???',
	re_send_email: '????????? ???????? ??????????? ?????',
	email_confirmation: '????????????? ??????????? ?????',
	// next 3 strings are used together
	by_verifying_you_agree_with: '??????????? ??? ??????? ?? ???????????? ?',
	by_verifying_you_agree_with_privacy_policy: '????????? ??????????????????',
	by_verifying_you_agree_with_privacy_policy_of_website_APP_URL: '????? ' + APP_DOMAIN,
	cannot_increase_reward_of_post_within_the_last_minute_before_payout: '??????????? ???????? ?????? ? ?????? 24 ???? ? ??????? ??????????',
	unverified_transactions: `{transactionsCount, plural,
		zero {0 ???????????????? ??????????}
		one {# ???????????????? ??????????}
		few {# ???????????????e ??????????}
		many {# ???????????????? ??????????}
	}`,
	profile_image_url: '???????? url ?????? ???????????',
	profile_name: 'Display Name',
	profile_about: 'About',
	profile_location: 'Location',
	profile_website: 'Website',
	saved: '?????????',
	server_returned_error: '?????? ???????',
	// Beginner tips in empty feed page
	empty_feed_1: "Looks like you haven't followed anything yet",
	empty_feed_2: 'If you recently added new users to follow, your personalized feed will populate once new content is available',
	empty_feed_3: 'Explore Trending Articles',
	empty_feed_4: "Read The Beginner's Guide",
	empty_feed_5: 'Read The Steemit Welcome Guide'
}

export { ru }